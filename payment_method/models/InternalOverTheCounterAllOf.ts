/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface InternalOverTheCounterAllOf
 */
export interface InternalOverTheCounterAllOf {
    /**
     * 
     * @type {string}
     * @memberof InternalOverTheCounterAllOf
     */
    paymentCodeId?: string;
}

/**
 * Check if a given object implements the InternalOverTheCounterAllOf interface.
 */
export function instanceOfInternalOverTheCounterAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InternalOverTheCounterAllOfFromJSON(json: any): InternalOverTheCounterAllOf {
    return InternalOverTheCounterAllOfFromJSONTyped(json, false);
}

export function InternalOverTheCounterAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalOverTheCounterAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentCodeId': !exists(json, 'payment_code_id') ? undefined : json['payment_code_id'],
    };
}

export function InternalOverTheCounterAllOfToJSON(value?: InternalOverTheCounterAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_code_id': value.paymentCodeId,
    };
}

