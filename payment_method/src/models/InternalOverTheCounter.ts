/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { OverTheCounterChannelCode } from './OverTheCounterChannelCode';
import {
    OverTheCounterChannelCodeFromJSON,
    OverTheCounterChannelCodeFromJSONTyped,
    OverTheCounterChannelCodeToJSON,
} from './OverTheCounterChannelCode';
import type { OverTheCounterChannelProperties } from './OverTheCounterChannelProperties';
import {
    OverTheCounterChannelPropertiesFromJSON,
    OverTheCounterChannelPropertiesFromJSONTyped,
    OverTheCounterChannelPropertiesToJSON,
} from './OverTheCounterChannelProperties';

/**
 * Over The Counter Payment Method Details
 * @export
 * @interface InternalOverTheCounter
 */
export interface InternalOverTheCounter {
    /**
     * 
     * @type {number}
     * @memberof InternalOverTheCounter
     */
    amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof InternalOverTheCounter
     */
    currency?: string;
    /**
     * 
     * @type {OverTheCounterChannelCode}
     * @memberof InternalOverTheCounter
     */
    channelCode: OverTheCounterChannelCode;
    /**
     * 
     * @type {OverTheCounterChannelProperties}
     * @memberof InternalOverTheCounter
     */
    channelProperties: OverTheCounterChannelProperties;
    /**
     * 
     * @type {string}
     * @memberof InternalOverTheCounter
     */
    paymentCodeId?: string;
}

/**
 * Check if a given object implements the InternalOverTheCounter interface.
 */
export function instanceOfInternalOverTheCounter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelProperties" in value;

    return isInstance;
}

export function InternalOverTheCounterFromJSON(json: any): InternalOverTheCounter {
    return InternalOverTheCounterFromJSONTyped(json, false);
}

export function InternalOverTheCounterFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalOverTheCounter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'channelCode': OverTheCounterChannelCodeFromJSON(json['channel_code']),
        'channelProperties': OverTheCounterChannelPropertiesFromJSON(json['channel_properties']),
        'paymentCodeId': !exists(json, 'payment_code_id') ? undefined : json['payment_code_id'],
    };
}

export function InternalOverTheCounterToJSON(value?: InternalOverTheCounter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'currency': value.currency,
        'channel_code': OverTheCounterChannelCodeToJSON(value.channelCode),
        'channel_properties': OverTheCounterChannelPropertiesToJSON(value.channelProperties),
        'payment_code_id': value.paymentCodeId,
    };
}

