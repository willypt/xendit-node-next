/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PaymentRequestAction } from './PaymentRequestAction';
import {
    PaymentRequestActionFromJSON,
    PaymentRequestActionFromJSONTyped,
    PaymentRequestActionToJSON,
} from './PaymentRequestAction';
import type { PaymentRequestBasketItem } from './PaymentRequestBasketItem';
import {
    PaymentRequestBasketItemFromJSON,
    PaymentRequestBasketItemFromJSONTyped,
    PaymentRequestBasketItemToJSON,
} from './PaymentRequestBasketItem';
import type { PaymentRequestCaptureMethod } from './PaymentRequestCaptureMethod';
import {
    PaymentRequestCaptureMethodFromJSON,
    PaymentRequestCaptureMethodFromJSONTyped,
    PaymentRequestCaptureMethodToJSON,
} from './PaymentRequestCaptureMethod';
import type { PaymentRequestCardVerificationResults } from './PaymentRequestCardVerificationResults';
import {
    PaymentRequestCardVerificationResultsFromJSON,
    PaymentRequestCardVerificationResultsFromJSONTyped,
    PaymentRequestCardVerificationResultsToJSON,
} from './PaymentRequestCardVerificationResults';
import type { PaymentRequestCountry } from './PaymentRequestCountry';
import {
    PaymentRequestCountryFromJSON,
    PaymentRequestCountryFromJSONTyped,
    PaymentRequestCountryToJSON,
} from './PaymentRequestCountry';
import type { PaymentRequestCurrency } from './PaymentRequestCurrency';
import {
    PaymentRequestCurrencyFromJSON,
    PaymentRequestCurrencyFromJSONTyped,
    PaymentRequestCurrencyToJSON,
} from './PaymentRequestCurrency';
import type { PaymentRequestInitiator } from './PaymentRequestInitiator';
import {
    PaymentRequestInitiatorFromJSON,
    PaymentRequestInitiatorFromJSONTyped,
    PaymentRequestInitiatorToJSON,
} from './PaymentRequestInitiator';
import type { PaymentRequestShippingInformation } from './PaymentRequestShippingInformation';
import {
    PaymentRequestShippingInformationFromJSON,
    PaymentRequestShippingInformationFromJSONTyped,
    PaymentRequestShippingInformationToJSON,
} from './PaymentRequestShippingInformation';
import type { PaymentRequestStatus } from './PaymentRequestStatus';
import {
    PaymentRequestStatusFromJSON,
    PaymentRequestStatusFromJSONTyped,
    PaymentRequestStatusToJSON,
} from './PaymentRequestStatus';
import type { PublicPaymentMethod } from './PublicPaymentMethod';
import {
    PublicPaymentMethodFromJSON,
    PublicPaymentMethodFromJSONTyped,
    PublicPaymentMethodToJSON,
} from './PublicPaymentMethod';

/**
 * 
 * @export
 * @interface PublicPaymentRequest
 */
export interface PublicPaymentRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    updated: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    referenceId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    businessId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    customerId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof PublicPaymentRequest
     */
    customer?: object | null;
    /**
     * 
     * @type {number}
     * @memberof PublicPaymentRequest
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof PublicPaymentRequest
     */
    minAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PublicPaymentRequest
     */
    maxAmount?: number | null;
    /**
     * 
     * @type {PaymentRequestCountry}
     * @memberof PublicPaymentRequest
     */
    country?: PaymentRequestCountry;
    /**
     * 
     * @type {PaymentRequestCurrency}
     * @memberof PublicPaymentRequest
     */
    currency: PaymentRequestCurrency;
    /**
     * 
     * @type {PublicPaymentMethod}
     * @memberof PublicPaymentRequest
     */
    paymentMethod: PublicPaymentMethod;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicPaymentRequest
     */
    failureCode?: string | null;
    /**
     * 
     * @type {PaymentRequestCaptureMethod}
     * @memberof PublicPaymentRequest
     */
    captureMethod?: PaymentRequestCaptureMethod | null;
    /**
     * 
     * @type {PaymentRequestInitiator}
     * @memberof PublicPaymentRequest
     */
    initiator?: PaymentRequestInitiator | null;
    /**
     * 
     * @type {PaymentRequestCardVerificationResults}
     * @memberof PublicPaymentRequest
     */
    cardVerificationResults?: PaymentRequestCardVerificationResults | null;
    /**
     * 
     * @type {PaymentRequestStatus}
     * @memberof PublicPaymentRequest
     */
    status: PaymentRequestStatus;
    /**
     * 
     * @type {Array<PaymentRequestAction>}
     * @memberof PublicPaymentRequest
     */
    actions?: Array<PaymentRequestAction>;
    /**
     * 
     * @type {object}
     * @memberof PublicPaymentRequest
     */
    metadata?: object | null;
    /**
     * 
     * @type {PaymentRequestShippingInformation}
     * @memberof PublicPaymentRequest
     */
    shippingInformation?: PaymentRequestShippingInformation | null;
    /**
     * 
     * @type {Array<PaymentRequestBasketItem>}
     * @memberof PublicPaymentRequest
     */
    items?: Array<PaymentRequestBasketItem> | null;
}

/**
 * Check if a given object implements the PublicPaymentRequest interface.
 */
export function instanceOfPublicPaymentRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "referenceId" in value;
    isInstance = isInstance && "businessId" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "paymentMethod" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function PublicPaymentRequestFromJSON(json: any): PublicPaymentRequest {
    return PublicPaymentRequestFromJSONTyped(json, false);
}

export function PublicPaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPaymentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': json['created'],
        'updated': json['updated'],
        'referenceId': json['reference_id'],
        'businessId': json['business_id'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'minAmount': !exists(json, 'min_amount') ? undefined : json['min_amount'],
        'maxAmount': !exists(json, 'max_amount') ? undefined : json['max_amount'],
        'country': !exists(json, 'country') ? undefined : PaymentRequestCountryFromJSON(json['country']),
        'currency': PaymentRequestCurrencyFromJSON(json['currency']),
        'paymentMethod': PublicPaymentMethodFromJSON(json['payment_method']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'failureCode': !exists(json, 'failure_code') ? undefined : json['failure_code'],
        'captureMethod': !exists(json, 'capture_method') ? undefined : PaymentRequestCaptureMethodFromJSON(json['capture_method']),
        'initiator': !exists(json, 'initiator') ? undefined : PaymentRequestInitiatorFromJSON(json['initiator']),
        'cardVerificationResults': !exists(json, 'card_verification_results') ? undefined : PaymentRequestCardVerificationResultsFromJSON(json['card_verification_results']),
        'status': PaymentRequestStatusFromJSON(json['status']),
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(PaymentRequestActionFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'shippingInformation': !exists(json, 'shipping_information') ? undefined : PaymentRequestShippingInformationFromJSON(json['shipping_information']),
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(PaymentRequestBasketItemFromJSON)),
    };
}

export function PublicPaymentRequestToJSON(value?: PublicPaymentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created': value.created,
        'updated': value.updated,
        'reference_id': value.referenceId,
        'business_id': value.businessId,
        'customer_id': value.customerId,
        'customer': value.customer,
        'amount': value.amount,
        'min_amount': value.minAmount,
        'max_amount': value.maxAmount,
        'country': PaymentRequestCountryToJSON(value.country),
        'currency': PaymentRequestCurrencyToJSON(value.currency),
        'payment_method': PublicPaymentMethodToJSON(value.paymentMethod),
        'description': value.description,
        'failure_code': value.failureCode,
        'capture_method': PaymentRequestCaptureMethodToJSON(value.captureMethod),
        'initiator': PaymentRequestInitiatorToJSON(value.initiator),
        'card_verification_results': PaymentRequestCardVerificationResultsToJSON(value.cardVerificationResults),
        'status': PaymentRequestStatusToJSON(value.status),
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(PaymentRequestActionToJSON)),
        'metadata': value.metadata,
        'shipping_information': PaymentRequestShippingInformationToJSON(value.shippingInformation),
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(PaymentRequestBasketItemToJSON)),
    };
}

