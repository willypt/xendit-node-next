/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { BasketItem } from './BasketItem';
import {
    BasketItemFromJSON,
    BasketItemFromJSONTyped,
    BasketItemToJSON,
} from './BasketItem';
import type { BillingInformation } from './BillingInformation';
import {
    BillingInformationFromJSON,
    BillingInformationFromJSONTyped,
    BillingInformationToJSON,
} from './BillingInformation';
import type { MutableCard } from './MutableCard';
import {
    MutableCardFromJSON,
    MutableCardFromJSONTyped,
    MutableCardToJSON,
} from './MutableCard';
import type { MutableCrypto } from './MutableCrypto';
import {
    MutableCryptoFromJSON,
    MutableCryptoFromJSONTyped,
    MutableCryptoToJSON,
} from './MutableCrypto';
import type { MutableDirectBankTransfer } from './MutableDirectBankTransfer';
import {
    MutableDirectBankTransferFromJSON,
    MutableDirectBankTransferFromJSONTyped,
    MutableDirectBankTransferToJSON,
} from './MutableDirectBankTransfer';
import type { MutableDirectDebit } from './MutableDirectDebit';
import {
    MutableDirectDebitFromJSON,
    MutableDirectDebitFromJSONTyped,
    MutableDirectDebitToJSON,
} from './MutableDirectDebit';
import type { MutableEwallet } from './MutableEwallet';
import {
    MutableEwalletFromJSON,
    MutableEwalletFromJSONTyped,
    MutableEwalletToJSON,
} from './MutableEwallet';
import type { MutableOverTheCounter } from './MutableOverTheCounter';
import {
    MutableOverTheCounterFromJSON,
    MutableOverTheCounterFromJSONTyped,
    MutableOverTheCounterToJSON,
} from './MutableOverTheCounter';
import type { MutableQRCode } from './MutableQRCode';
import {
    MutableQRCodeFromJSON,
    MutableQRCodeFromJSONTyped,
    MutableQRCodeToJSON,
} from './MutableQRCode';
import type { MutableVirtualAccount } from './MutableVirtualAccount';
import {
    MutableVirtualAccountFromJSON,
    MutableVirtualAccountFromJSONTyped,
    MutableVirtualAccountToJSON,
} from './MutableVirtualAccount';
import type { OptionalPaymentMethodCountry } from './OptionalPaymentMethodCountry';
import {
    OptionalPaymentMethodCountryFromJSON,
    OptionalPaymentMethodCountryFromJSONTyped,
    OptionalPaymentMethodCountryToJSON,
} from './OptionalPaymentMethodCountry';
import type { PaymentMethodReusability } from './PaymentMethodReusability';
import {
    PaymentMethodReusabilityFromJSON,
    PaymentMethodReusabilityFromJSONTyped,
    PaymentMethodReusabilityToJSON,
} from './PaymentMethodReusability';
import type { PaymentMethodType } from './PaymentMethodType';
import {
    PaymentMethodTypeFromJSON,
    PaymentMethodTypeFromJSONTyped,
    PaymentMethodTypeToJSON,
} from './PaymentMethodType';

/**
 * 
 * @export
 * @interface InternalCreatePaymentMethod
 */
export interface InternalCreatePaymentMethod {
    /**
     * 
     * @type {PaymentMethodType}
     * @memberof InternalCreatePaymentMethod
     */
    type: PaymentMethodType;
    /**
     * 
     * @type {OptionalPaymentMethodCountry}
     * @memberof InternalCreatePaymentMethod
     */
    country?: OptionalPaymentMethodCountry | null;
    /**
     * 
     * @type {PaymentMethodReusability}
     * @memberof InternalCreatePaymentMethod
     */
    reusability: PaymentMethodReusability;
    /**
     * 
     * @type {string}
     * @memberof InternalCreatePaymentMethod
     */
    customerId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof InternalCreatePaymentMethod
     */
    customer?: object | null;
    /**
     * 
     * @type {string}
     * @memberof InternalCreatePaymentMethod
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof InternalCreatePaymentMethod
     */
    description?: string | null;
    /**
     * 
     * @type {MutableCard}
     * @memberof InternalCreatePaymentMethod
     */
    card?: MutableCard;
    /**
     * 
     * @type {MutableCrypto}
     * @memberof InternalCreatePaymentMethod
     */
    cryptocurrency?: MutableCrypto;
    /**
     * 
     * @type {MutableDirectBankTransfer}
     * @memberof InternalCreatePaymentMethod
     */
    directBankTransfer?: MutableDirectBankTransfer;
    /**
     * 
     * @type {MutableDirectDebit}
     * @memberof InternalCreatePaymentMethod
     */
    directDebit?: MutableDirectDebit;
    /**
     * 
     * @type {MutableEwallet}
     * @memberof InternalCreatePaymentMethod
     */
    ewallet?: MutableEwallet;
    /**
     * 
     * @type {MutableOverTheCounter}
     * @memberof InternalCreatePaymentMethod
     */
    overTheCounter?: MutableOverTheCounter;
    /**
     * 
     * @type {MutableQRCode}
     * @memberof InternalCreatePaymentMethod
     */
    qrCode?: MutableQRCode;
    /**
     * 
     * @type {MutableVirtualAccount}
     * @memberof InternalCreatePaymentMethod
     */
    virtualAccount?: MutableVirtualAccount;
    /**
     * 
     * @type {object}
     * @memberof InternalCreatePaymentMethod
     */
    metadata?: object | null;
    /**
     * 
     * @type {Array<BasketItem>}
     * @memberof InternalCreatePaymentMethod
     */
    items?: Array<BasketItem> | null;
    /**
     * 
     * @type {object}
     * @memberof InternalCreatePaymentMethod
     */
    internalMetadata?: object | null;
    /**
     * 
     * @type {BillingInformation}
     * @memberof InternalCreatePaymentMethod
     */
    billingInformation?: BillingInformation | null;
}

/**
 * Check if a given object implements the InternalCreatePaymentMethod interface.
 */
export function instanceOfInternalCreatePaymentMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "reusability" in value;

    return isInstance;
}

export function InternalCreatePaymentMethodFromJSON(json: any): InternalCreatePaymentMethod {
    return InternalCreatePaymentMethodFromJSONTyped(json, false);
}

export function InternalCreatePaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalCreatePaymentMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': PaymentMethodTypeFromJSON(json['type']),
        'country': !exists(json, 'country') ? undefined : OptionalPaymentMethodCountryFromJSON(json['country']),
        'reusability': PaymentMethodReusabilityFromJSON(json['reusability']),
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'referenceId': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'card': !exists(json, 'card') ? undefined : MutableCardFromJSON(json['card']),
        'cryptocurrency': !exists(json, 'cryptocurrency') ? undefined : MutableCryptoFromJSON(json['cryptocurrency']),
        'directBankTransfer': !exists(json, 'direct_bank_transfer') ? undefined : MutableDirectBankTransferFromJSON(json['direct_bank_transfer']),
        'directDebit': !exists(json, 'direct_debit') ? undefined : MutableDirectDebitFromJSON(json['direct_debit']),
        'ewallet': !exists(json, 'ewallet') ? undefined : MutableEwalletFromJSON(json['ewallet']),
        'overTheCounter': !exists(json, 'over_the_counter') ? undefined : MutableOverTheCounterFromJSON(json['over_the_counter']),
        'qrCode': !exists(json, 'qr_code') ? undefined : MutableQRCodeFromJSON(json['qr_code']),
        'virtualAccount': !exists(json, 'virtual_account') ? undefined : MutableVirtualAccountFromJSON(json['virtual_account']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(BasketItemFromJSON)),
        'internalMetadata': !exists(json, 'internal_metadata') ? undefined : json['internal_metadata'],
        'billingInformation': !exists(json, 'billing_information') ? undefined : BillingInformationFromJSON(json['billing_information']),
    };
}

export function InternalCreatePaymentMethodToJSON(value?: InternalCreatePaymentMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': PaymentMethodTypeToJSON(value.type),
        'country': OptionalPaymentMethodCountryToJSON(value.country),
        'reusability': PaymentMethodReusabilityToJSON(value.reusability),
        'customer_id': value.customerId,
        'customer': value.customer,
        'reference_id': value.referenceId,
        'description': value.description,
        'card': MutableCardToJSON(value.card),
        'cryptocurrency': MutableCryptoToJSON(value.cryptocurrency),
        'direct_bank_transfer': MutableDirectBankTransferToJSON(value.directBankTransfer),
        'direct_debit': MutableDirectDebitToJSON(value.directDebit),
        'ewallet': MutableEwalletToJSON(value.ewallet),
        'over_the_counter': MutableOverTheCounterToJSON(value.overTheCounter),
        'qr_code': MutableQRCodeToJSON(value.qrCode),
        'virtual_account': MutableVirtualAccountToJSON(value.virtualAccount),
        'metadata': value.metadata,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(BasketItemToJSON)),
        'internal_metadata': value.internalMetadata,
        'billing_information': BillingInformationToJSON(value.billingInformation),
    };
}

