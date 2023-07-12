/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * Crypto Wallet
 * @export
 * @interface CryptoWallet
 */
export interface CryptoWallet {
    /**
     * 
     * @type {string}
     * @memberof CryptoWallet
     */
    id?: string | null;
}

/**
 * Check if a given object implements the CryptoWallet interface.
 */
export function instanceOfCryptoWallet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CryptoWalletFromJSON(json: any): CryptoWallet {
    return CryptoWalletFromJSONTyped(json, false);
}

export function CryptoWalletFromJSONTyped(json: any, ignoreDiscriminator: boolean): CryptoWallet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function CryptoWalletToJSON(value?: CryptoWallet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

