/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PaymentRequestCardVerificationResultsThreeDeeSecure } from './PaymentRequestCardVerificationResultsThreeDeeSecure';
import {
    PaymentRequestCardVerificationResultsThreeDeeSecureFromJSON,
    PaymentRequestCardVerificationResultsThreeDeeSecureFromJSONTyped,
    PaymentRequestCardVerificationResultsThreeDeeSecureToJSON,
} from './PaymentRequestCardVerificationResultsThreeDeeSecure';

/**
 * 
 * @export
 * @interface PaymentRequestCardVerificationResults
 */
export interface PaymentRequestCardVerificationResults {
    /**
     * 
     * @type {PaymentRequestCardVerificationResultsThreeDeeSecure}
     * @memberof PaymentRequestCardVerificationResults
     */
    threeDSecure: PaymentRequestCardVerificationResultsThreeDeeSecure;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResults
     */
    cvvResult?: PaymentRequestCardVerificationResultsCvvResultEnum;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResults
     */
    addressVerificationResult?: PaymentRequestCardVerificationResultsAddressVerificationResultEnum;
}


/**
 * @export
 */
export const PaymentRequestCardVerificationResultsCvvResultEnum = {
    Matched: 'MATCHED',
    NotMatched: 'NOT_MATCHED',
    NotProcessed: 'NOT_PROCESSED',
    NotIncluded: 'NOT_INCLUDED',
    ValidationFailed: 'VALIDATION_FAILED',
    SuspiciousTransaction: 'SUSPICIOUS_TRANSACTION',
    NotSupported: 'NOT_SUPPORTED',
    UnknownFromProcessor: 'UNKNOWN_FROM_PROCESSOR'
} as const;
export type PaymentRequestCardVerificationResultsCvvResultEnum = typeof PaymentRequestCardVerificationResultsCvvResultEnum[keyof typeof PaymentRequestCardVerificationResultsCvvResultEnum];

/**
 * @export
 */
export const PaymentRequestCardVerificationResultsAddressVerificationResultEnum = {
    Matched: 'MATCHED',
    NotMatched: 'NOT_MATCHED',
    NotMatchedName: 'NOT_MATCHED_NAME',
    PartialMatchAddress: 'PARTIAL_MATCH_ADDRESS',
    PartialMatchZip: 'PARTIAL_MATCH_ZIP',
    PartialMatchName: 'PARTIAL_MATCH_NAME',
    Invalid: 'INVALID',
    NotSupported: 'NOT_SUPPORTED',
    NotAvailable: 'NOT_AVAILABLE',
    UnknownFromProcessor: 'UNKNOWN_FROM_PROCESSOR'
} as const;
export type PaymentRequestCardVerificationResultsAddressVerificationResultEnum = typeof PaymentRequestCardVerificationResultsAddressVerificationResultEnum[keyof typeof PaymentRequestCardVerificationResultsAddressVerificationResultEnum];


/**
 * Check if a given object implements the PaymentRequestCardVerificationResults interface.
 */
export function instanceOfPaymentRequestCardVerificationResults(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "threeDSecure" in value;

    return isInstance;
}

export function PaymentRequestCardVerificationResultsFromJSON(json: any): PaymentRequestCardVerificationResults {
    return PaymentRequestCardVerificationResultsFromJSONTyped(json, false);
}

export function PaymentRequestCardVerificationResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestCardVerificationResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'threeDSecure': PaymentRequestCardVerificationResultsThreeDeeSecureFromJSON(json['three_d_secure']),
        'cvvResult': !exists(json, 'cvv_result') ? undefined : json['cvv_result'],
        'addressVerificationResult': !exists(json, 'address_verification_result') ? undefined : json['address_verification_result'],
    };
}

export function PaymentRequestCardVerificationResultsToJSON(value?: PaymentRequestCardVerificationResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'three_d_secure': PaymentRequestCardVerificationResultsThreeDeeSecureToJSON(value.threeDSecure),
        'cvv_result': value.cvvResult,
        'address_verification_result': value.addressVerificationResult,
    };
}

