/* tslint:disable */
/* eslint-disable */
export * from './runtime';

import {

} from './payment_request';

import {
   Balance,
} from './balance';

import {
   PaymentMethod,
} from './payment_method';

import {
   Refund,
} from './refunds';

import {
   Customer,
} from './customer';

import {

} from './src';


export interface XenditOpts {
  secretKey: string;
  xenditURL?: string;
}
export class Xendit {
  opts: XenditOpts;


    Balance: Balance;

    PaymentMethod: PaymentMethod;

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



    this.Balance = new Balance(this.opts);
    
    this.PaymentMethod = new PaymentMethod(this.opts);
    
    this.Refund = new Refund(this.opts);
    
    this.Customer = new Customer(this.opts);
    

  }
}