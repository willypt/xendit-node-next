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
   PaymentMethod,
} from './payment_method';
export {
   PaymentMethod,
} from './payment_method';

import {
   BalanceAndTransaction,
} from './balance_and_transaction';
export {
   BalanceAndTransaction,
} from './balance_and_transaction';

import {
   Refund,
} from './refund';
export {
   Refund,
} from './refund';

import {
   Payout,
} from './payout';
export {
   Payout,
} from './payout';


export interface XenditOpts {
  secretKey: string;
  xenditURL?: string;
}
export class Xendit {
  opts: XenditOpts;


    PaymentRequest: PaymentRequest;

    PaymentMethod: PaymentMethod;

    BalanceAndTransaction: BalanceAndTransaction;

    Refund: Refund;

    Payout: Payout;


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
    
    this.PaymentMethod = new PaymentMethod(this.opts);
    
    this.BalanceAndTransaction = new BalanceAndTransaction(this.opts);
    
    this.Refund = new Refund(this.opts);
    
    this.Payout = new Payout(this.opts);
    
  }
}

export default Xendit;