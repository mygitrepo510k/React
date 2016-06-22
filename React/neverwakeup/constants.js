export const DEV = true;

/**
 * Gets the first name, technically gets all words leading up to the last
 * Example: "Blake Robertson" --> "Blake"
 * Example: "Blake Andrew Robertson" --> "Blake Andrew"
 * Example: "Blake" --> "Blake"
 * @param str
 * @returns {*}
 */
export var getFirstName = function(str) {
    var arr = str.split(' ');
    if( arr.length === 1 ) {
        return arr[0];
    }
    return arr.slice(0, -1).join(' '); // returns "Paul Steve"
}

/**
 * Gets the last name (e.g. the last word in the supplied string)
 * Example: "Blake Robertson" --> "Robertson"
 * Example: "Blake Andrew Robertson" --> "Robertson"
 * Example: "Blake" --> "<None>"
 * @param str
 * @param {string} [ifNone] optional default value if there is not last name, defaults to "<None>"
 * @returns {string}
 */
export var getLastName = function(str, ifNone) {
    var arr = str.split(' ');
    if(arr.length === 1) {
        return ifNone || "";
    }
    return arr.slice(-1).join(' ');
}

//These only needed if you are using stripe not shopify payment flow
export const STORE_NAME = 'Hottiewood';
export const CURRENCY = 'USD';
export const STRIPE_CURRENCY_MULTIPLIER = 1;
export const STORE_DESCRIPTION = 'Walentines App Store Purchase';
export const STRIPE_KEY = 'sk_test_fGthSFKrJ0IzVGcVKHteGLSv';
export const FIREBASE_ORDERS = 'https://neverwakeup.firebaseio.com/orders/';