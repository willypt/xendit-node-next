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

/**
 * 
 * @export
 * @interface BasePaymentMethod
 */
export interface BasePaymentMethod {
    /**
     * 
     * @type {string}
     * @memberof BasePaymentMethod
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BasePaymentMethod
     */
    businessId?: string;
    /**
     * 
     * @type {PaymentMethodType}
     * @memberof BasePaymentMethod
     */
    type?: PaymentMethodType;
    /**
     * 
     * @type {PaymentMethodCountry}
     * @memberof BasePaymentMethod
     */
    country?: PaymentMethodCountry;
    /**
     * 
     * @type {string}
     * @memberof BasePaymentMethod
     */
    customerId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof BasePaymentMethod
     */
    customer?: object | null;
    /**
     * 
     * @type {string}
     * @memberof BasePaymentMethod
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BasePaymentMethod
     */
    description?: string | null;
    /**
     * 
     * @type {PaymentMethodStatus}
     * @memberof BasePaymentMethod
     */
    status?: PaymentMethodStatus;
    /**
     * 
     * @type {PaymentMethodReusability}
     * @memberof BasePaymentMethod
     */
    reusability?: PaymentMethodReusability;
    /**
     * 
     * @type {Array<PaymentMethodAction>}
     * @memberof BasePaymentMethod
     */
    actions?: Array<PaymentMethodAction>;
    /**
     * 
     * @type {object}
     * @memberof BasePaymentMethod
     */
    metadata?: object | null;
    /**
     * 
     * @type {BillingInformation}
     * @memberof BasePaymentMethod
     */
    billingInformation?: BillingInformation | null;
    /**
     * 
     * @type {string}
     * @memberof BasePaymentMethod
     */
    failureCode?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof BasePaymentMethod
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BasePaymentMethod
     */
    updated?: Date;
}

/**
 * Check if a given object implements the BasePaymentMethod interface.
 */
export function instanceOfBasePaymentMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BasePaymentMethodFromJSON(json: any): BasePaymentMethod {
    return BasePaymentMethodFromJSONTyped(json, false);
}

export function BasePaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasePaymentMethod {
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
    };
}

export function BasePaymentMethodToJSON(value?: BasePaymentMethod | null): any {
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
    };
}

