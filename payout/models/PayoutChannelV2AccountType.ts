/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * Available account types (applicable for MY_DUITNOW)
 * @export
 */
export const PayoutChannelV2AccountType = {
    NationalId: 'NATIONAL_ID',
    MobileNo: 'MOBILE_NO',
    Passport: 'PASSPORT',
    BusinessRegistration: 'BUSINESS_REGISTRATION'
} as const;
export type PayoutChannelV2AccountType = typeof PayoutChannelV2AccountType[keyof typeof PayoutChannelV2AccountType];


export function PayoutChannelV2AccountTypeFromJSON(json: any): PayoutChannelV2AccountType {
    return PayoutChannelV2AccountTypeFromJSONTyped(json, false);
}

export function PayoutChannelV2AccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutChannelV2AccountType {
    return json as PayoutChannelV2AccountType;
}

export function PayoutChannelV2AccountTypeToJSON(value?: PayoutChannelV2AccountType | null): any {
    return value as any;
}

