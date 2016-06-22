import _ from 'lodash';

export function loadLocale(locale, type){
	if(type === 'moment'){
		switch (locale){
			case 'zh-Hant':
			    require('moment/locale/zh-tw');	
		}
	}
}

export function hashCode(str){
	/*jshint bitwise:false */
    var i, l,
        hval = 0x811c9dc5;

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    
    return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
}

export function calculateCartTotal(cart){
	return _.reduce(cart, function(sum, n) {
      return sum + (n.price * n.count);
    }, 0);
}

export function ccFormat(value, cardType) {
	if(cardType === 'AMEX'){
		var re,format, len, amex = {}, num = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
	    amex['_1'] = function (str) {
	        return num;
	    };
	    amex['_2'] = function (str) {
	        return num;
	    };
	    amex['_3'] = function (str) {
	        return num;
	    };
	    amex['_4'] = function (str) {
	        return num;
	    };
	    amex['_5'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4);
	    };
	    amex['_6'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4);
	    };
	    amex['_7'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4);
	    };
	    amex['_8'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4);
	    };
	    amex['_9'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4);
	    };
	    amex['_10'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4) +' ';
	    };
	    amex['_11'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
	    };
	    amex['_12'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
	    };
	    amex['_13'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
	    };
	    amex['_14'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
	    };
	    amex['_15'] = function (str) {
	        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
	    };
	    
	    if(num.length > 4){
			len = '_'+num.length;
		    format = amex[len](num);
		} else {
			format = '';
		}
	    
	    return format;
	}

	var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
	var matches = v.match(/\d{4,16}/g);
	var match = matches && matches[0] || ''
	var parts = [];

	for (var i=0, len=match.length; i<len; i+=4) {
		parts.push(match.substring(i, i+4))
	}	
	
	if (parts.length) {
		return parts.join(' ')
	} else {
		return value
	}
}

//http://stackoverflow.com/a/19138852
export function detectCardType(number) {
	var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9](?:[0-9])?/,
        mastercard: /^5[1-5][0-9]/,
        amex: /^3[47][0-9]/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };
    if (re.electron.test(number)) {
        return 'ELECTRON';
    } else if (re.maestro.test(number)) {
        return 'MAESTRO';
    } else if (re.dankort.test(number)) {
        return 'DANKORT';
    } else if (re.interpayment.test(number)) {
        return 'INTERPAYMENT';
    } else if (re.unionpay.test(number)) {
        return 'UNIONPAY';
    } else if (re.visa.test(number)) {
        return 'VISA';
    } else if (re.mastercard.test(number)) {
        return 'MASTERCARD';
    } else if (re.amex.test(number)) {
        return 'AMEX';
    } else if (re.diners.test(number)) {
        return 'DINERS';
    } else if (re.discover.test(number)) {
        return 'DISCOVER';
    } else if (re.jcb.test(number)) {
        return 'JCB';
    } else {
        return '';
    }
}