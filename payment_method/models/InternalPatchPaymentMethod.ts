/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PatchCrypto } from './PatchCrypto';
import {
    PatchCryptoFromJSON,
    PatchCryptoFromJSONTyped,
    PatchCryptoToJSON,
} from './PatchCrypto';
import type { PatchOverTheCounter } from './PatchOverTheCounter';
import {
    PatchOverTheCounterFromJSON,
    PatchOverTheCounterFromJSONTyped,
    PatchOverTheCounterToJSON,
} from './PatchOverTheCounter';
import type { PaymentMethodStatus } from './PaymentMethodStatus';
import {
    PaymentMethodStatusFromJSON,
    PaymentMethodStatusFromJSONTyped,
    PaymentMethodStatusToJSON,
} from './PaymentMethodStatus';

/**
 * 
 * @export
 * @interface InternalPatchPaymentMethod
 */
export interface InternalPatchPaymentMethod {
    /**
     * 
     * @type {PaymentMethodStatus}
     * @memberof InternalPatchPaymentMethod
     */
    status?: PaymentMethodStatus;
    /**
     * 
     * @type {PatchCrypto}
     * @memberof InternalPatchPaymentMethod
     */
    cryptocurrency?: PatchCrypto;
    /**
     * 
     * @type {PatchOverTheCounter}
     * @memberof InternalPatchPaymentMethod
     */
    overTheCounter?: PatchOverTheCounter;
}

/**
 * Check if a given object implements the InternalPatchPaymentMethod interface.
 */
export function instanceOfInternalPatchPaymentMethod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InternalPatchPaymentMethodFromJSON(json: any): InternalPatchPaymentMethod {
    return InternalPatchPaymentMethodFromJSONTyped(json, false);
}

export function InternalPatchPaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalPatchPaymentMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : PaymentMethodStatusFromJSON(json['status']),
        'cryptocurrency': !exists(json, 'cryptocurrency') ? undefined : PatchCryptoFromJSON(json['cryptocurrency']),
        'overTheCounter': !exists(json, 'over_the_counter') ? undefined : PatchOverTheCounterFromJSON(json['over_the_counter']),
    };
}

export function InternalPatchPaymentMethodToJSON(value?: InternalPatchPaymentMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': PaymentMethodStatusToJSON(value.status),
        'cryptocurrency': PatchCryptoToJSON(value.cryptocurrency),
        'over_the_counter': PatchOverTheCounterToJSON(value.overTheCounter),
    };
}

