/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PatchOverTheCounter } from './PatchOverTheCounter';
import {
    PatchOverTheCounterFromJSON,
    PatchOverTheCounterFromJSONTyped,
    PatchOverTheCounterToJSON,
} from './PatchOverTheCounter';
import type { PatchVirtualAccount } from './PatchVirtualAccount';
import {
    PatchVirtualAccountFromJSON,
    PatchVirtualAccountFromJSONTyped,
    PatchVirtualAccountToJSON,
} from './PatchVirtualAccount';
import type { PaymentMethodReusability } from './PaymentMethodReusability';
import {
    PaymentMethodReusabilityFromJSON,
    PaymentMethodReusabilityFromJSONTyped,
    PaymentMethodReusabilityToJSON,
} from './PaymentMethodReusability';
import type { PaymentMethodStatus } from './PaymentMethodStatus';
import {
    PaymentMethodStatusFromJSON,
    PaymentMethodStatusFromJSONTyped,
    PaymentMethodStatusToJSON,
} from './PaymentMethodStatus';

/**
 * 
 * @export
 * @interface PublicPatchPaymentMethod
 */
export interface PublicPatchPaymentMethod {
    /**
     * 
     * @type {string}
     * @memberof PublicPatchPaymentMethod
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPatchPaymentMethod
     */
    referenceId?: string;
    /**
     * 
     * @type {PaymentMethodReusability}
     * @memberof PublicPatchPaymentMethod
     */
    reusability?: PaymentMethodReusability;
    /**
     * 
     * @type {PaymentMethodStatus}
     * @memberof PublicPatchPaymentMethod
     */
    status?: PaymentMethodStatus;
    /**
     * 
     * @type {PatchOverTheCounter}
     * @memberof PublicPatchPaymentMethod
     */
    overTheCounter?: PatchOverTheCounter;
    /**
     * 
     * @type {PatchVirtualAccount}
     * @memberof PublicPatchPaymentMethod
     */
    virtualAccount?: PatchVirtualAccount;
}

/**
 * Check if a given object implements the PublicPatchPaymentMethod interface.
 */
export function instanceOfPublicPatchPaymentMethod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublicPatchPaymentMethodFromJSON(json: any): PublicPatchPaymentMethod {
    return PublicPatchPaymentMethodFromJSONTyped(json, false);
}

export function PublicPatchPaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPatchPaymentMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referenceId': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'reusability': !exists(json, 'reusability') ? undefined : PaymentMethodReusabilityFromJSON(json['reusability']),
        'status': !exists(json, 'status') ? undefined : PaymentMethodStatusFromJSON(json['status']),
        'overTheCounter': !exists(json, 'over_the_counter') ? undefined : PatchOverTheCounterFromJSON(json['over_the_counter']),
        'virtualAccount': !exists(json, 'virtual_account') ? undefined : PatchVirtualAccountFromJSON(json['virtual_account']),
    };
}

export function PublicPatchPaymentMethodToJSON(value?: PublicPatchPaymentMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'reference_id': value.referenceId,
        'reusability': PaymentMethodReusabilityToJSON(value.reusability),
        'status': PaymentMethodStatusToJSON(value.status),
        'over_the_counter': PatchOverTheCounterToJSON(value.overTheCounter),
        'virtual_account': PatchVirtualAccountToJSON(value.virtualAccount),
    };
}

