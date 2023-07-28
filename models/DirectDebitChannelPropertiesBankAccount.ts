/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * Direct Debit Bank Account Channel Properties
 * @export
 * @interface DirectDebitChannelPropertiesBankAccount
 */
export interface DirectDebitChannelPropertiesBankAccount {
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelPropertiesBankAccount
     */
    successReturnUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelPropertiesBankAccount
     */
    failureReturnUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelPropertiesBankAccount
     */
    mobileNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelPropertiesBankAccount
     */
    identityDocumentNumber?: string;
}

/**
 * Check if a given object implements the DirectDebitChannelPropertiesBankAccount interface.
 */
export function instanceOfDirectDebitChannelPropertiesBankAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectDebitChannelPropertiesBankAccountFromJSON(json: any): DirectDebitChannelPropertiesBankAccount {
    return DirectDebitChannelPropertiesBankAccountFromJSONTyped(json, false);
}

export function DirectDebitChannelPropertiesBankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectDebitChannelPropertiesBankAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'successReturnUrl': !exists(json, 'success_return_url') ? undefined : json['success_return_url'],
        'failureReturnUrl': !exists(json, 'failure_return_url') ? undefined : json['failure_return_url'],
        'mobileNumber': !exists(json, 'mobile_number') ? undefined : json['mobile_number'],
        'identityDocumentNumber': !exists(json, 'identity_document_number') ? undefined : json['identity_document_number'],
    };
}

export function DirectDebitChannelPropertiesBankAccountToJSON(value?: DirectDebitChannelPropertiesBankAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success_return_url': value.successReturnUrl,
        'failure_return_url': value.failureReturnUrl,
        'mobile_number': value.mobileNumber,
        'identity_document_number': value.identityDocumentNumber,
    };
}

