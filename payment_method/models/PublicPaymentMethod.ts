/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { BillingInformation } from './BillingInformation';
import {
    BillingInformationFromJSON,
    BillingInformationFromJSONTyped,
    BillingInformationToJSON,
} from './BillingInformation';
import type { PaymentMethodAction } from './PaymentMethodAction';
import {
    PaymentMethodActionFromJSON,
    PaymentMethodActionFromJSONTyped,
    PaymentMethodActionToJSON,
} from './PaymentMethodAction';
import type { PaymentMethodCountry } from './PaymentMethodCountry';
import {
    PaymentMethodCountryFromJSON,
    PaymentMethodCountryFromJSONTyped,
    PaymentMethodCountryToJSON,
} from './PaymentMethodCountry';
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
import type { PaymentMethodType } from './PaymentMethodType';
import {
    PaymentMethodTypeFromJSON,
    PaymentMethodTypeFromJSONTyped,
    PaymentMethodTypeToJSON,
} from './PaymentMethodType';
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
 * @interface PublicPaymentMethod
 */
export interface PublicPaymentMethod {
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentMethod
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentMethod
     */
    businessId?: string;
    /**
     * 
     * @type {PaymentMethodType}
     * @memberof PublicPaymentMethod
     */
    type?: PaymentMethodType;
    /**
     * 
     * @type {PaymentMethodCountry}
     * @memberof PublicPaymentMethod
     */
    country?: PaymentMethodCountry;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentMethod
     */
    customerId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof PublicPaymentMethod
     */
    customer?: object | null;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentMethod
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentMethod
     */
    description?: string | null;
    /**
     * 
     * @type {PaymentMethodStatus}
     * @memberof PublicPaymentMethod
     */
    status?: PaymentMethodStatus;
    /**
     * 
     * @type {PaymentMethodReusability}
     * @memberof PublicPaymentMethod
     */
    reusability?: PaymentMethodReusability;
    /**
     * 
     * @type {Array<PaymentMethodAction>}
     * @memberof PublicPaymentMethod
     */
    actions?: Array<PaymentMethodAction>;
    /**
     * 
     * @type {object}
     * @memberof PublicPaymentMethod
     */
    metadata?: object | null;
    /**
     * 
     * @type {BillingInformation}
     * @memberof PublicPaymentMethod
     */
    billingInformation?: BillingInformation | null;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentMethod
     */
    failureCode?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PublicPaymentMethod
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PublicPaymentMethod
     */
    updated?: Date;
    /**
     * 
     * @type {PublicEwallet}
     * @memberof PublicPaymentMethod
     */
    ewallet?: PublicEwallet | null;
    /**
     * 
     * @type {PublicDirectDebit}
     * @memberof PublicPaymentMethod
     */
    directDebit?: PublicDirectDebit | null;
    /**
     * 
     * @type {PublicOverTheCounter}
     * @memberof PublicPaymentMethod
     */
    overTheCounter?: PublicOverTheCounter | null;
    /**
     * 
     * @type {PublicCard}
     * @memberof PublicPaymentMethod
     */
    card?: PublicCard | null;
    /**
     * 
     * @type {PublicQRCode}
     * @memberof PublicPaymentMethod
     */
    qrCode?: PublicQRCode | null;
}

/**
 * Check if a given object implements the PublicPaymentMethod interface.
 */
export function instanceOfPublicPaymentMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PublicPaymentMethodFromJSON(json: any): PublicPaymentMethod {
    return PublicPaymentMethodFromJSONTyped(json, false);
}

export function PublicPaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPaymentMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'businessId': !exists(json, 'business_id') ? undefined : json['business_id'],
        'type': !exists(json, 'type') ? undefined : PaymentMethodTypeFromJSON(json['type']),
        'country': !exists(json, 'country') ? undefined : PaymentMethodCountryFromJSON(json['country']),
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'referenceId': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'status': !exists(json, 'status') ? undefined : PaymentMethodStatusFromJSON(json['status']),
        'reusability': !exists(json, 'reusability') ? undefined : PaymentMethodReusabilityFromJSON(json['reusability']),
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(PaymentMethodActionFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'billingInformation': !exists(json, 'billing_information') ? undefined : BillingInformationFromJSON(json['billing_information']),
        'failureCode': !exists(json, 'failure_code') ? undefined : json['failure_code'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'ewallet': !exists(json, 'ewallet') ? undefined : PublicEwalletFromJSON(json['ewallet']),
        'directDebit': !exists(json, 'direct_debit') ? undefined : PublicDirectDebitFromJSON(json['direct_debit']),
        'overTheCounter': !exists(json, 'over_the_counter') ? undefined : PublicOverTheCounterFromJSON(json['over_the_counter']),
        'card': !exists(json, 'card') ? undefined : PublicCardFromJSON(json['card']),
        'qrCode': !exists(json, 'qr_code') ? undefined : PublicQRCodeFromJSON(json['qr_code']),
    };
}

export function PublicPaymentMethodToJSON(value?: PublicPaymentMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'business_id': value.businessId,
        'type': PaymentMethodTypeToJSON(value.type),
        'country': PaymentMethodCountryToJSON(value.country),
        'customer_id': value.customerId,
        'customer': value.customer,
        'reference_id': value.referenceId,
        'description': value.description,
        'status': PaymentMethodStatusToJSON(value.status),
        'reusability': PaymentMethodReusabilityToJSON(value.reusability),
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(PaymentMethodActionToJSON)),
        'metadata': value.metadata,
        'billing_information': BillingInformationToJSON(value.billingInformation),
        'failure_code': value.failureCode,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'ewallet': PublicEwalletToJSON(value.ewallet),
        'direct_debit': PublicDirectDebitToJSON(value.directDebit),
        'over_the_counter': PublicOverTheCounterToJSON(value.overTheCounter),
        'card': PublicCardToJSON(value.card),
        'qr_code': PublicQRCodeToJSON(value.qrCode),
    };
}
