/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * Card Information
 * @export
 * @interface CardInformation
 */
export interface CardInformation {
    /**
     * 
     * @type {string}
     * @memberof CardInformation
     */
    tokenId: string;
    /**
     * 1st 6 and last 4 digits of the card
     * @type {string}
     * @memberof CardInformation
     */
    maskedCardNumber: string;
    /**
     * Card expiry month in MM format
     * @type {string}
     * @memberof CardInformation
     */
    expiryMonth: string;
    /**
     * Card expiry month in YY format
     * @type {string}
     * @memberof CardInformation
     */
    expiryYear: string;
    /**
     * Cardholder name
     * @type {string}
     * @memberof CardInformation
     */
    cardholderName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CardInformation
     */
    fingerprint?: string;
    /**
     * 
     * @type {string}
     * @memberof CardInformation
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CardInformation
     */
    network?: CardInformationNetworkEnum;
    /**
     * 
     * @type {string}
     * @memberof CardInformation
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof CardInformation
     */
    issuer?: string;
}


/**
 * @export
 */
export const CardInformationNetworkEnum = {
    Visa: 'VISA',
    Mastercard: 'MASTERCARD',
    Jcb: 'JCB',
    Amex: 'AMEX',
    Discover: 'DISCOVER'
} as const;
export type CardInformationNetworkEnum = typeof CardInformationNetworkEnum[keyof typeof CardInformationNetworkEnum];


/**
 * Check if a given object implements the CardInformation interface.
 */
export function instanceOfCardInformation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tokenId" in value;
    isInstance = isInstance && "maskedCardNumber" in value;
    isInstance = isInstance && "expiryMonth" in value;
    isInstance = isInstance && "expiryYear" in value;

    return isInstance;
}

export function CardInformationFromJSON(json: any): CardInformation {
    return CardInformationFromJSONTyped(json, false);
}

export function CardInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenId': json['token_id'],
        'maskedCardNumber': json['masked_card_number'],
        'expiryMonth': json['expiry_month'],
        'expiryYear': json['expiry_year'],
        'cardholderName': !exists(json, 'cardholder_name') ? undefined : json['cardholder_name'],
        'fingerprint': !exists(json, 'fingerprint') ? undefined : json['fingerprint'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'issuer': !exists(json, 'issuer') ? undefined : json['issuer'],
    };
}

export function CardInformationToJSON(value?: CardInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token_id': value.tokenId,
        'masked_card_number': value.maskedCardNumber,
        'expiry_month': value.expiryMonth,
        'expiry_year': value.expiryYear,
        'cardholder_name': value.cardholderName,
        'fingerprint': value.fingerprint,
        'type': value.type,
        'network': value.network,
        'country': value.country,
        'issuer': value.issuer,
    };
}

