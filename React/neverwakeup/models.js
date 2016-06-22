import Realm from 'realm';

const Cart = {
  name: 'Cart',
  properties: {
    id    : 'int',
    title : 'string',
    price : 'string',
    date  : 'date',
    count : 'int',
    size  : 'int',
    sizeName: 'string'
  }
};

const ShippingAddress = {
  name: 'ShippingAddress',
  properties: {
  	name: 'string',
  	email: 'string',
  	address: 'string',
  	city: 'string',
  	state: 'string',
  	zipcode: 'string',
  	country: 'string',
  	sameAddress: 'bool'
  }
};

const BillingAddress = {
  name: 'BillingAddress',
  properties: {
    name: 'string',
    email: 'string',
    address: 'string',
    city: 'string',
    state: 'string',
    zipcode: 'string',
    country: 'string',
    sameAddress: 'bool'
  }
};

const CreditCard = {
  name: 'CreditCard',
  properties: {
    cardNumber: 'string',
    expiry: 'string',
    cvc: 'string',
    cardType: 'string'
  }
};

export default new Realm({
	schema: [
		Cart, 
		ShippingAddress,
    BillingAddress,
    CreditCard
	], 
	schemaVersion: 8
});


