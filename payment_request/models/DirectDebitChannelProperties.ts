/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { DirectDebitChannelPropertiesBankAccount } from './DirectDebitChannelPropertiesBankAccount';
import {
    DirectDebitChannelPropertiesBankAccountFromJSON,
    DirectDebitChannelPropertiesBankAccountFromJSONTyped,
    DirectDebitChannelPropertiesBankAccountToJSON,
} from './DirectDebitChannelPropertiesBankAccount';
import type { DirectDebitChannelPropertiesBankRedirect } from './DirectDebitChannelPropertiesBankRedirect';
import {
    DirectDebitChannelPropertiesBankRedirectFromJSON,
    DirectDebitChannelPropertiesBankRedirectFromJSONTyped,
    DirectDebitChannelPropertiesBankRedirectToJSON,
} from './DirectDebitChannelPropertiesBankRedirect';
import type { DirectDebitChannelPropertiesDebitCard } from './DirectDebitChannelPropertiesDebitCard';
import {
    DirectDebitChannelPropertiesDebitCardFromJSON,
    DirectDebitChannelPropertiesDebitCardFromJSONTyped,
    DirectDebitChannelPropertiesDebitCardToJSON,
} from './DirectDebitChannelPropertiesDebitCard';

/**
 * 
 * @export
 * @interface DirectDebitChannelProperties
 */
export interface DirectDebitChannelProperties {
    /**
     * Mobile number of the customer registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    mobileNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    successReturnUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    failureReturnUrl?: string;
    /**
     * Last four digits of the debit card
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    cardLastFour?: string;
    /**
     * Expiry month and year of the debit card (in MM/YY format)
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    cardExpiry?: string;
    /**
     * Email address of the customer that is registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    email?: string;
}

/**
 * Check if a given object implements the DirectDebitChannelProperties interface.
 */
export function instanceOfDirectDebitChannelProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectDebitChannelPropertiesFromJSON(json: any): DirectDebitChannelProperties {
    return DirectDebitChannelPropertiesFromJSONTyped(json, false);
}

export function DirectDebitChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectDebitChannelProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mobileNumber': !exists(json, 'mobile_number') ? undefined : json['mobile_number'],
        'successReturnUrl': !exists(json, 'success_return_url') ? undefined : json['success_return_url'],
        'failureReturnUrl': !exists(json, 'failure_return_url') ? undefined : json['failure_return_url'],
        'cardLastFour': !exists(json, 'card_last_four') ? undefined : json['card_last_four'],
        'cardExpiry': !exists(json, 'card_expiry') ? undefined : json['card_expiry'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function DirectDebitChannelPropertiesToJSON(value?: DirectDebitChannelProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mobile_number': value.mobileNumber,
        'success_return_url': value.successReturnUrl,
        'failure_return_url': value.failureReturnUrl,
        'card_last_four': value.cardLastFour,
        'card_expiry': value.cardExpiry,
        'email': value.email,
    };
}

