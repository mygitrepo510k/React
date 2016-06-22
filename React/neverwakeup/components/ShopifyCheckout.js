import * as constants from '../constants';
import { calculateCartTotal } from '../util';
import _ from 'lodash';
import { NativeModules } from 'react-native';
var BuySdkManager = NativeModules.BuySdkManager;
/*
TO FIX: 
  - metadata key pairs
  - shipping address hash
  - one source of truth for total price
*/
export function ShopifyCheckout(
  cart, 
  shipping, 
  billing, 
  payment, 
  SHOPIFY_URL,
  SHOPIFY_ACCESS_TOKEN,
  SHOPIFY_APIKEY,
  SHOPIFY_CHANNELID,
  SHOPIFY_CURRENCY,
  callback) {
  var cc = {};
  cc.credit_card = {
    number: payment.cardNumber,
    month: payment.expiry.split('/')[0],
    year: payment.expiry.split('/')[1],
    verification_value: payment.cvc,
    first_name:constants.getFirstName(billing.name),
    last_name:constants.getLastName(billing.name)
  };
  
  var lineItems = [];
  _.each(cart, function(item, i){
      var obj = {}
      obj.product_id = item.id;
      obj.variant_id = item.size;
      obj.quantity = item.count;
      
      lineItems.push(obj);
  });

_.each(lineItems, function(item,i){
  console.log(">>>>>>>>",item.product_id);
    BuySdkManager.authorize(
      SHOPIFY_URL, 
      SHOPIFY_APIKEY, 
      SHOPIFY_CHANNELID, 
      "", 
      (error, header) => {
        BuySdkManager.buildCart(String(item.product_id));
    });

});
  var orderObj = {}
  orderObj.order = {
      email: billing.email,
      fulfillment_status: null,
      send_receipt: true,
      financial_status: 'authorized',
      send_fulfillment_receipt: true,
      line_items: lineItems,
      customer: {
        first_name: constants.getFirstName(billing.name),
        last_name: constants.getLastName(billing.name),
        email: billing.email
      },
      billing_address: {
        first_name: constants.getFirstName(billing.name),
        last_name: constants.getLastName(billing.name),
        address1: billing.address,
        city: billing.city,
        province: billing.state,
        country: billing.country,
        zip: billing.zipcode
      },
      shipping_address: {
        first_name: constants.getFirstName(shipping.name),
        last_name: constants.getLastName(shipping.name),
        address1: shipping.address,
        city: shipping.city,
        province: shipping.state,
        country: shipping.country,
        zip: shipping.zipcode
      },
      transactions: [{
        kind: 'authorization',
        status: 'pending',
        amount: calculateCartTotal(cart)
      }],
      currency: SHOPIFY_CURRENCY
  }

  //So we have all the billing, shipping and cart
  //Need to hook up Buy sdk here
/*
    BuySdkManager.authorize(
      SHOPIFY_URL, 
      SHOPIFY_APIKEY, 
      SHOPIFY_CHANNELID, 
      "", 
      (error, header) => {
        //BuySdkManager.buildCart(String(item.product_id));
        BuySdkManager.checkOut();
    });
*/
  console.log(orderObj);
  console.log(SHOPIFY_URL, SHOPIFY_ACCESS_TOKEN);

  fetch('https://' + SHOPIFY_URL +'/admin/orders.json', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
    },
    body: JSON.stringify(orderObj)
  })
  .then((result) => { 
      console.log(result);
  }).done();

};