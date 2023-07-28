/* tslint:disable */
/* eslint-disable */
export * from './runtime';

import {
   Default,
} from './payment_request';
export {
   Default,
} from './payment_request';

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
   PayoutsAPI,   Payouts API,
} from './payout';
export {
   PayoutsAPI,   Payouts API,
} from './payout';


export interface XenditOpts {
  secretKey: string;
  xenditURL?: string;
}
export class Xendit {
  opts: XenditOpts;


    Default: Default;

    Balance: Balance;

    PublicTransactions: PublicTransactions;

    Refund: Refund;

    PayoutsAPI: PayoutsAPI;

    Payouts API: Payouts API;


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


    this.Default = new Default(this.opts);
    
    this.Balance = new Balance(this.opts);
        this.PublicTransactions = new PublicTransactions(this.opts);
    
    this.Refund = new Refund(this.opts);
    
    this.PayoutsAPI = new PayoutsAPI(this.opts);
        this.Payouts API = new Payouts API(this.opts);
    
  }
}

export default Xendit;