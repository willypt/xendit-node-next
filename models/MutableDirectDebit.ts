/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { DirectDebitChannelCode } from './DirectDebitChannelCode';
import {
    DirectDebitChannelCodeFromJSON,
    DirectDebitChannelCodeFromJSONTyped,
    DirectDebitChannelCodeToJSON,
} from './DirectDebitChannelCode';
import type { DirectDebitChannelProperties } from './DirectDebitChannelProperties';
import {
    DirectDebitChannelPropertiesFromJSON,
    DirectDebitChannelPropertiesFromJSONTyped,
    DirectDebitChannelPropertiesToJSON,
} from './DirectDebitChannelProperties';
import type { DirectDebitType } from './DirectDebitType';
import {
    DirectDebitTypeFromJSON,
    DirectDebitTypeFromJSONTyped,
    DirectDebitTypeToJSON,
} from './DirectDebitType';

/**
 * 
 * @export
 * @interface MutableDirectDebit
 */
export interface MutableDirectDebit {
    /**
     * 
     * @type {DirectDebitChannelCode}
     * @memberof MutableDirectDebit
     */
    channelCode: DirectDebitChannelCode;
    /**
     * 
     * @type {DirectDebitChannelProperties}
     * @memberof MutableDirectDebit
     */
    channelProperties: DirectDebitChannelProperties | null;
    /**
     * 
     * @type {DirectDebitType}
     * @memberof MutableDirectDebit
     */
    type?: DirectDebitType;
}

/**
 * Check if a given object implements the MutableDirectDebit interface.
 */
export function instanceOfMutableDirectDebit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelProperties" in value;

    return isInstance;
}

export function MutableDirectDebitFromJSON(json: any): MutableDirectDebit {
    return MutableDirectDebitFromJSONTyped(json, false);
}

export function MutableDirectDebitFromJSONTyped(json: any, ignoreDiscriminator: boolean): MutableDirectDebit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelCode': DirectDebitChannelCodeFromJSON(json['channel_code']),
        'channelProperties': DirectDebitChannelPropertiesFromJSON(json['channel_properties']),
        'type': !exists(json, 'type') ? undefined : DirectDebitTypeFromJSON(json['type']),
    };
}

export function MutableDirectDebitToJSON(value?: MutableDirectDebit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_code': DirectDebitChannelCodeToJSON(value.channelCode),
        'channel_properties': DirectDebitChannelPropertiesToJSON(value.channelProperties),
        'type': DirectDebitTypeToJSON(value.type),
    };
}
