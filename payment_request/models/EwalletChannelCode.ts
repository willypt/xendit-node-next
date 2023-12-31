/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * Ewallet Channel Code
 * @export
 */
export const EwalletChannelCode = {
    Gcash: 'GCASH',
    Grabpay: 'GRABPAY',
    Paymaya: 'PAYMAYA',
    Dana: 'DANA',
    Ovo: 'OVO',
    Linkaja: 'LINKAJA',
    Shopeepay: 'SHOPEEPAY',
    Nexcash: 'NEXCASH',
    Astrapay: 'ASTRAPAY',
    Jeniuspay: 'JENIUSPAY',
    Appota: 'APPOTA',
    Momo: 'MOMO',
    Vnptwallet: 'VNPTWALLET',
    Viettelpay: 'VIETTELPAY',
    Zalopay: 'ZALOPAY'
} as const;
export type EwalletChannelCode = typeof EwalletChannelCode[keyof typeof EwalletChannelCode];


export function EwalletChannelCodeFromJSON(json: any): EwalletChannelCode {
    return EwalletChannelCodeFromJSONTyped(json, false);
}

export function EwalletChannelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EwalletChannelCode {
    return json as EwalletChannelCode;
}

export function EwalletChannelCodeToJSON(value?: EwalletChannelCode | null): any {
    return value as any;
}

