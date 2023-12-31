/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PaymentRequestCurrency } from './PaymentRequestCurrency';
import {
    PaymentRequestCurrencyFromJSON,
    PaymentRequestCurrencyFromJSONTyped,
    PaymentRequestCurrencyToJSON,
} from './PaymentRequestCurrency';
import type { VirtualAccountAlternativeDisplay } from './VirtualAccountAlternativeDisplay';
import {
    VirtualAccountAlternativeDisplayFromJSON,
    VirtualAccountAlternativeDisplayFromJSONTyped,
    VirtualAccountAlternativeDisplayToJSON,
} from './VirtualAccountAlternativeDisplay';
import type { VirtualAccountChannelCode } from './VirtualAccountChannelCode';
import {
    VirtualAccountChannelCodeFromJSON,
    VirtualAccountChannelCodeFromJSONTyped,
    VirtualAccountChannelCodeToJSON,
} from './VirtualAccountChannelCode';
import type { VirtualAccountChannelProperties } from './VirtualAccountChannelProperties';
import {
    VirtualAccountChannelPropertiesFromJSON,
    VirtualAccountChannelPropertiesFromJSONTyped,
    VirtualAccountChannelPropertiesToJSON,
} from './VirtualAccountChannelProperties';

/**
 * Virtual Account Payment Method Details
 * @export
 * @interface PublicVirtualAccount
 */
export interface PublicVirtualAccount {
    /**
     * 
     * @type {number}
     * @memberof PublicVirtualAccount
     */
    minAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PublicVirtualAccount
     */
    maxAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PublicVirtualAccount
     */
    amount?: number | null;
    /**
     * 
     * @type {PaymentRequestCurrency}
     * @memberof PublicVirtualAccount
     */
    currency?: PaymentRequestCurrency;
    /**
     * 
     * @type {VirtualAccountChannelCode}
     * @memberof PublicVirtualAccount
     */
    channelCode: VirtualAccountChannelCode;
    /**
     * 
     * @type {VirtualAccountChannelProperties}
     * @memberof PublicVirtualAccount
     */
    channelProperties: VirtualAccountChannelProperties;
    /**
     * Alternative display requested for the virtual account
     * @type {Array<string>}
     * @memberof PublicVirtualAccount
     */
    alternativeDisplayTypes?: Array<PublicVirtualAccountAlternativeDisplayTypesEnum>;
    /**
     * 
     * @type {Array<VirtualAccountAlternativeDisplay>}
     * @memberof PublicVirtualAccount
     */
    alternativeDisplays?: Array<VirtualAccountAlternativeDisplay>;
}


/**
 * @export
 */
export const PublicVirtualAccountAlternativeDisplayTypesEnum = {
    QrString: 'QR_STRING'
} as const;
export type PublicVirtualAccountAlternativeDisplayTypesEnum = typeof PublicVirtualAccountAlternativeDisplayTypesEnum[keyof typeof PublicVirtualAccountAlternativeDisplayTypesEnum];


/**
 * Check if a given object implements the PublicVirtualAccount interface.
 */
export function instanceOfPublicVirtualAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelProperties" in value;

    return isInstance;
}

export function PublicVirtualAccountFromJSON(json: any): PublicVirtualAccount {
    return PublicVirtualAccountFromJSONTyped(json, false);
}

export function PublicVirtualAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicVirtualAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minAmount': !exists(json, 'min_amount') ? undefined : json['min_amount'],
        'maxAmount': !exists(json, 'max_amount') ? undefined : json['max_amount'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': !exists(json, 'currency') ? undefined : PaymentRequestCurrencyFromJSON(json['currency']),
        'channelCode': VirtualAccountChannelCodeFromJSON(json['channel_code']),
        'channelProperties': VirtualAccountChannelPropertiesFromJSON(json['channel_properties']),
        'alternativeDisplayTypes': !exists(json, 'alternative_display_types') ? undefined : json['alternative_display_types'],
        'alternativeDisplays': !exists(json, 'alternative_displays') ? undefined : ((json['alternative_displays'] as Array<any>).map(VirtualAccountAlternativeDisplayFromJSON)),
    };
}

export function PublicVirtualAccountToJSON(value?: PublicVirtualAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'min_amount': value.minAmount,
        'max_amount': value.maxAmount,
        'amount': value.amount,
        'currency': PaymentRequestCurrencyToJSON(value.currency),
        'channel_code': VirtualAccountChannelCodeToJSON(value.channelCode),
        'channel_properties': VirtualAccountChannelPropertiesToJSON(value.channelProperties),
        'alternative_display_types': value.alternativeDisplayTypes,
        'alternative_displays': value.alternativeDisplays === undefined ? undefined : ((value.alternativeDisplays as Array<any>).map(VirtualAccountAlternativeDisplayToJSON)),
    };
}

