/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PayoutChannelV2AmountLimits } from './PayoutChannelV2AmountLimits';
import {
    PayoutChannelV2AmountLimitsFromJSON,
    PayoutChannelV2AmountLimitsFromJSONTyped,
    PayoutChannelV2AmountLimitsToJSON,
} from './PayoutChannelV2AmountLimits';
import type { PayoutChannelV2CategoryRequest } from './PayoutChannelV2CategoryRequest';
import {
    PayoutChannelV2CategoryRequestFromJSON,
    PayoutChannelV2CategoryRequestFromJSONTyped,
    PayoutChannelV2CategoryRequestToJSON,
} from './PayoutChannelV2CategoryRequest';

/**
 * 
 * @export
 * @interface PayoutChannelV2
 */
export interface PayoutChannelV2 {
    /**
     * 
     * @type {string}
     * @memberof PayoutChannelV2
     */
    channelCode: string;
    /**
     * 
     * @type {PayoutChannelV2CategoryRequest}
     * @memberof PayoutChannelV2
     */
    channelCategory: PayoutChannelV2CategoryRequest;
    /**
     * 
     * @type {string}
     * @memberof PayoutChannelV2
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof PayoutChannelV2
     */
    channelName: string;
    /**
     * 
     * @type {PayoutChannelV2AmountLimits}
     * @memberof PayoutChannelV2
     */
    amountLimits: PayoutChannelV2AmountLimits;
}

/**
 * Check if a given object implements the PayoutChannelV2 interface.
 */
export function instanceOfPayoutChannelV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelCategory" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "channelName" in value;
    isInstance = isInstance && "amountLimits" in value;

    return isInstance;
}

export function PayoutChannelV2FromJSON(json: any): PayoutChannelV2 {
    return PayoutChannelV2FromJSONTyped(json, false);
}

export function PayoutChannelV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutChannelV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelCode': json['channel_code'],
        'channelCategory': PayoutChannelV2CategoryRequestFromJSON(json['channel_category']),
        'currency': json['currency'],
        'channelName': json['channel_name'],
        'amountLimits': PayoutChannelV2AmountLimitsFromJSON(json['amount_limits']),
    };
}

export function PayoutChannelV2ToJSON(value?: PayoutChannelV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_code': value.channelCode,
        'channel_category': PayoutChannelV2CategoryRequestToJSON(value.channelCategory),
        'currency': value.currency,
        'channel_name': value.channelName,
        'amount_limits': PayoutChannelV2AmountLimitsToJSON(value.amountLimits),
    };
}

