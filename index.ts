/* tslint:disable */
/* eslint-disable */
export * from './runtime';

import {
   PaymentRequests,
} from './payment_request';
export {
   PaymentRequests,
} from './payment_request';

import {
   PaymentMethods,
} from './payment_method';
export {
   PaymentMethods,
} from './payment_method';

import {
   Balance,   PublicTransactions,
} from './balance_and_transaction';
export {
   Balance,   PublicTransactions,
} from './balance_and_transaction';

import {
   Refund,
} from './refund';
export {
   Refund,
} from './refund';

import {
   Payouts,
} from './payout';
export {
   Payouts,
} from './payout';


export interface XenditOpts {
  secretKey: string;
  xenditURL?: string;
}
export class Xendit {
  opts: XenditOpts;


    PaymentRequests: PaymentRequests;

    PaymentMethods: PaymentMethods;

    Balance: Balance;

    PublicTransactions: PublicTransactions;

    Refund: Refund;

    Payouts: Payouts;


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


    this.PaymentRequests = new PaymentRequests(this.opts);
    
    this.PaymentMethods = new PaymentMethods(this.opts);
    
    this.Balance = new Balance(this.opts);
        this.PublicTransactions = new PublicTransactions(this.opts);
    
    this.Refund = new Refund(this.opts);
    
    this.Payouts = new Payouts(this.opts);
    
  }
}

export default Xendit;