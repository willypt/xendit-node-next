/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * Billing Information
 * @export
 * @interface BillingInformation
 */
export interface BillingInformation {
    /**
     * 
     * @type {string}
     * @memberof BillingInformation
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof BillingInformation
     */
    streetLine1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingInformation
     */
    streetLine2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingInformation
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingInformation
     */
    provinceState?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingInformation
     */
    postalCode?: string | null;
}

/**
 * Check if a given object implements the BillingInformation interface.
 */
export function instanceOfBillingInformation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "country" in value;

    return isInstance;
}

export function BillingInformationFromJSON(json: any): BillingInformation {
    return BillingInformationFromJSONTyped(json, false);
}

export function BillingInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': json['country'],
        'streetLine1': !exists(json, 'street_line1') ? undefined : json['street_line1'],
        'streetLine2': !exists(json, 'street_line2') ? undefined : json['street_line2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'provinceState': !exists(json, 'province_state') ? undefined : json['province_state'],
        'postalCode': !exists(json, 'postal_code') ? undefined : json['postal_code'],
    };
}

export function BillingInformationToJSON(value?: BillingInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': value.country,
        'street_line1': value.streetLine1,
        'street_line2': value.streetLine2,
        'city': value.city,
        'province_state': value.provinceState,
        'postal_code': value.postalCode,
    };
}

