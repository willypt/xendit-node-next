/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PublicCard } from './PublicCard';
import {
    PublicCardFromJSON,
    PublicCardFromJSONTyped,
    PublicCardToJSON,
} from './PublicCard';
import type { PublicDirectDebit } from './PublicDirectDebit';
import {
    PublicDirectDebitFromJSON,
    PublicDirectDebitFromJSONTyped,
    PublicDirectDebitToJSON,
} from './PublicDirectDebit';
import type { PublicEwallet } from './PublicEwallet';
import {
    PublicEwalletFromJSON,
    PublicEwalletFromJSONTyped,
    PublicEwalletToJSON,
} from './PublicEwallet';
import type { PublicOverTheCounter } from './PublicOverTheCounter';
import {
    PublicOverTheCounterFromJSON,
    PublicOverTheCounterFromJSONTyped,
    PublicOverTheCounterToJSON,
} from './PublicOverTheCounter';
import type { PublicQRCode } from './PublicQRCode';
import {
    PublicQRCodeFromJSON,
    PublicQRCodeFromJSONTyped,
    PublicQRCodeToJSON,
} from './PublicQRCode';

/**
 * 
 * @export
 * @interface PublicPaymentMethodAllOf
 */
export interface PublicPaymentMethodAllOf {
    /**
     * 
     * @type {PublicEwallet}
     * @memberof PublicPaymentMethodAllOf
     */
    ewallet?: PublicEwallet | null;
    /**
     * 
     * @type {PublicDirectDebit}
     * @memberof PublicPaymentMethodAllOf
     */
    directDebit?: PublicDirectDebit | null;
    /**
     * 
     * @type {PublicOverTheCounter}
     * @memberof PublicPaymentMethodAllOf
     */
    overTheCounter?: PublicOverTheCounter | null;
    /**
     * 
     * @type {PublicCard}
     * @memberof PublicPaymentMethodAllOf
     */
    card?: PublicCard | null;
    /**
     * 
     * @type {PublicQRCode}
     * @memberof PublicPaymentMethodAllOf
     */
    qrCode?: PublicQRCode | null;
}

/**
 * Check if a given object implements the PublicPaymentMethodAllOf interface.
 */
export function instanceOfPublicPaymentMethodAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublicPaymentMethodAllOfFromJSON(json: any): PublicPaymentMethodAllOf {
    return PublicPaymentMethodAllOfFromJSONTyped(json, false);
}

export function PublicPaymentMethodAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPaymentMethodAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ewallet': !exists(json, 'ewallet') ? undefined : PublicEwalletFromJSON(json['ewallet']),
        'directDebit': !exists(json, 'direct_debit') ? undefined : PublicDirectDebitFromJSON(json['direct_debit']),
        'overTheCounter': !exists(json, 'over_the_counter') ? undefined : PublicOverTheCounterFromJSON(json['over_the_counter']),
        'card': !exists(json, 'card') ? undefined : PublicCardFromJSON(json['card']),
        'qrCode': !exists(json, 'qr_code') ? undefined : PublicQRCodeFromJSON(json['qr_code']),
    };
}

export function PublicPaymentMethodAllOfToJSON(value?: PublicPaymentMethodAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ewallet': PublicEwalletToJSON(value.ewallet),
        'direct_debit': PublicDirectDebitToJSON(value.directDebit),
        'over_the_counter': PublicOverTheCounterToJSON(value.overTheCounter),
        'card': PublicCardToJSON(value.card),
        'qr_code': PublicQRCodeToJSON(value.qrCode),
    };
}

