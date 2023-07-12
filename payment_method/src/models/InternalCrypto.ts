/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { CryptoChannelCode } from './CryptoChannelCode';
import {
    CryptoChannelCodeFromJSON,
    CryptoChannelCodeFromJSONTyped,
    CryptoChannelCodeToJSON,
} from './CryptoChannelCode';
import type { CryptoChannelProperties } from './CryptoChannelProperties';
import {
    CryptoChannelPropertiesFromJSON,
    CryptoChannelPropertiesFromJSONTyped,
    CryptoChannelPropertiesToJSON,
} from './CryptoChannelProperties';
import type { CryptoWallet } from './CryptoWallet';
import {
    CryptoWalletFromJSON,
    CryptoWalletFromJSONTyped,
    CryptoWalletToJSON,
} from './CryptoWallet';

/**
 * Cryptocurrency Payment Method Details
 * @export
 * @interface InternalCrypto
 */
export interface InternalCrypto {
    /**
     * 
     * @type {CryptoChannelCode}
     * @memberof InternalCrypto
     */
    channelCode?: CryptoChannelCode | null;
    /**
     * 
     * @type {CryptoChannelProperties}
     * @memberof InternalCrypto
     */
    channelProperties?: CryptoChannelProperties;
    /**
     * 
     * @type {CryptoWallet}
     * @memberof InternalCrypto
     */
    wallet?: CryptoWallet | null;
}

/**
 * Check if a given object implements the InternalCrypto interface.
 */
export function instanceOfInternalCrypto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InternalCryptoFromJSON(json: any): InternalCrypto {
    return InternalCryptoFromJSONTyped(json, false);
}

export function InternalCryptoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalCrypto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelCode': !exists(json, 'channel_code') ? undefined : CryptoChannelCodeFromJSON(json['channel_code']),
        'channelProperties': !exists(json, 'channel_properties') ? undefined : CryptoChannelPropertiesFromJSON(json['channel_properties']),
        'wallet': !exists(json, 'wallet') ? undefined : CryptoWalletFromJSON(json['wallet']),
    };
}

export function InternalCryptoToJSON(value?: InternalCrypto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_code': CryptoChannelCodeToJSON(value.channelCode),
        'channel_properties': CryptoChannelPropertiesToJSON(value.channelProperties),
        'wallet': CryptoWalletToJSON(value.wallet),
    };
}

