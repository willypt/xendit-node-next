/* tslint:disable */
/* eslint-disable */
export * from './runtime';

import {
   PaymentRequest,
} from './payment_request';
export {
   PaymentRequest,
} from './payment_request';

import {
   Balance,
} from './balance';
export {
   Balance,
} from './balance';

import {
   Refund,
} from './refunds';
export {
   Refund,
} from './refunds';

import {
   Customer,
} from './customer';
export {
   Customer,
} from './customer';


export interface XenditOpts {
  secretKey: string;
  xenditURL?: string;
}
export class Xendit {
  opts: XenditOpts;


    PaymentRequest: PaymentRequest;

    Balance: Balance;

    Refund: Refund;

    Customer: Customer;


  constructor({ secretKey: _secretKey, xenditURL: _xenditURL }: XenditOpts) {
    const secretKey = _secretKey || ''
    const xenditURL = _xenditURL || 'https://api.xendit.co';

    if (secretKey.startsWith('xnd_development_')) {
      console.warn(`You are using Xendit's TEST secret key. Please use your LIVE secret key when you are ready to go live.`)
    } else if (secretKey.startsWith('xnd_production_')) {
      // do nothing
    } else {
      console.error(`Invalid secret key provided. Please use your Xendit secret key that starts with 'xnd_'`)
    }

    this.opts = {
      secretKey,
      xenditURL
    }


    this.PaymentRequest = new PaymentRequest(this.opts);
    
    this.Balance = new Balance(this.opts);
    
    this.Refund = new Refund(this.opts);
    
    this.Customer = new Customer(this.opts);
    
  }
}

export default Xendit;