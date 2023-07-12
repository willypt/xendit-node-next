/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * 
 * @export
 */
export const PaymentMethodType = {
    Card: 'CARD',
    Cryptocurrency: 'CRYPTOCURRENCY',
    DirectBankTransfer: 'DIRECT_BANK_TRANSFER',
    DirectDebit: 'DIRECT_DEBIT',
    Ewallet: 'EWALLET',
    OverTheCounter: 'OVER_THE_COUNTER',
    QrCode: 'QR_CODE',
    VirtualAccount: 'VIRTUAL_ACCOUNT'
} as const;
export type PaymentMethodType = typeof PaymentMethodType[keyof typeof PaymentMethodType];


export function PaymentMethodTypeFromJSON(json: any): PaymentMethodType {
    return PaymentMethodTypeFromJSONTyped(json, false);
}

export function PaymentMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodType {
    return json as PaymentMethodType;
}

export function PaymentMethodTypeToJSON(value?: PaymentMethodType | null): any {
    return value as any;
}

