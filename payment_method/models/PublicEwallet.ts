/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { EwalletAccount } from './EwalletAccount';
import {
    EwalletAccountFromJSON,
    EwalletAccountFromJSONTyped,
    EwalletAccountToJSON,
} from './EwalletAccount';
import type { EwalletChannelCode } from './EwalletChannelCode';
import {
    EwalletChannelCodeFromJSON,
    EwalletChannelCodeFromJSONTyped,
    EwalletChannelCodeToJSON,
} from './EwalletChannelCode';
import type { EwalletChannelProperties } from './EwalletChannelProperties';
import {
    EwalletChannelPropertiesFromJSON,
    EwalletChannelPropertiesFromJSONTyped,
    EwalletChannelPropertiesToJSON,
} from './EwalletChannelProperties';

/**
 * Ewallet Payment Method Details
 * @export
 * @interface PublicEwallet
 */
export interface PublicEwallet {
    /**
     * 
     * @type {EwalletChannelCode}
     * @memberof PublicEwallet
     */
    channelCode: EwalletChannelCode;
    /**
     * 
     * @type {EwalletChannelProperties}
     * @memberof PublicEwallet
     */
    channelProperties?: EwalletChannelProperties;
    /**
     * 
     * @type {EwalletAccount}
     * @memberof PublicEwallet
     */
    account?: EwalletAccount;
}

/**
 * Check if a given object implements the PublicEwallet interface.
 */
export function instanceOfPublicEwallet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelCode" in value;

    return isInstance;
}

export function PublicEwalletFromJSON(json: any): PublicEwallet {
    return PublicEwalletFromJSONTyped(json, false);
}

export function PublicEwalletFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicEwallet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelCode': EwalletChannelCodeFromJSON(json['channel_code']),
        'channelProperties': !exists(json, 'channel_properties') ? undefined : EwalletChannelPropertiesFromJSON(json['channel_properties']),
        'account': !exists(json, 'account') ? undefined : EwalletAccountFromJSON(json['account']),
    };
}

export function PublicEwalletToJSON(value?: PublicEwallet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_code': EwalletChannelCodeToJSON(value.channelCode),
        'channel_properties': EwalletChannelPropertiesToJSON(value.channelProperties),
        'account': EwalletAccountToJSON(value.account),
    };
}
