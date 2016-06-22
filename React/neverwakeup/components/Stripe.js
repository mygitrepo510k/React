import * as constants from '../constants';
import DB from '../models';
import { calculateCartTotal, hashCode } from '../util';

export function ChargeCreditCard(
  cart, 
  shipping, 
  billing, 
  payment, 
  callback) {
  const customerStripeUrl = 'https://api.stripe.com/v1/tokens';
  const chargesStripeUrl = 'https://api.stripe.com/v1/charges';

  function __queryStripe(stripeObject, url){
    var formBody = [];
    for (var property in stripeObject) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(stripeObject[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
//    console.warn(formBody);

    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + constants.STRIPE_KEY
      },
      body: formBody
    });
  }

  var totalPrice = calculateCartTotal(cart);
  var cardExpirySplit = payment.expiry.split('/');
  var month = cardExpirySplit[0];
  var year = cardExpirySplit[1];
            
  var customerObject = {
    'card[number]': payment.cardNumber,//payment.cardNumber,
    'card[exp_year]': year,//payment.expiry,
    'card[exp_month]': month,//payment.expiry,
    'card[cvc]': payment.cvc, //payment.cvc,
    'card[name]': billing.name
  };
  //console.warn(JSON.stringify(customerObject));
  var chargeObject = {
    'amount': totalPrice*constants.STRIPE_CURRENCY_MULTIPLIER,
    'currency': constants.CURRENCY,
    'capture': false,
    'description': constants.STORE_DESCRIPTION,
    'receipt_email': shipping.email,
    'statement_descriptor': constants.STORE_NAME
  };

  //1.) Create Stripe token for customer
  var createCustomer = __queryStripe(customerObject, customerStripeUrl);
  createCustomer.then((response) => response.json()).then((result) => { 
      chargeObject.source = result.id;
      
      //2.) Create charges using token
      var chargeRequest = __queryStripe(chargeObject, chargesStripeUrl);
      chargeRequest.then((response) => response.json()).then((result) => {
        //console.warn(JSON.stringify(result));
        if(result.id){
          //3.)Sync order data to firebase
          var post = {
            stripe: result,
            shipping: {
              city: shipping.city,
              state: shipping.state,
              country: shipping.country,
              postal_code: shipping.postal,
              line1: shipping.address,
              name: billing.name
            },
            orders: cart
          };
          
          var hashEmail = hashCode(shipping.email);
          fetch(constants.FIREBASE_ORDERS+hashEmail+'.json', {
            method: 'post',
            body: JSON.stringify(post)
          }).then((response) => {
              DB.write(() => {
                callback(response);
              });    
          }).done();
        } else {
          //error with credit card
          callback(result);
        }
      }).done();
  }).done();
};