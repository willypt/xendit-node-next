/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';
import type { DashboardChannelsCategories } from './DashboardChannelsCategories';
import {
    DashboardChannelsCategoriesFromJSON,
    DashboardChannelsCategoriesFromJSONTyped,
    DashboardChannelsCategoriesToJSON,
} from './DashboardChannelsCategories';
import type { DashboardTransactionStatuses } from './DashboardTransactionStatuses';
import {
    DashboardTransactionStatusesFromJSON,
    DashboardTransactionStatusesFromJSONTyped,
    DashboardTransactionStatusesToJSON,
} from './DashboardTransactionStatuses';
import type { PublicFeeResponse } from './PublicFeeResponse';
import {
    PublicFeeResponseFromJSON,
    PublicFeeResponseFromJSONTyped,
    PublicFeeResponseToJSON,
} from './PublicFeeResponse';
import type { PublicTransactionResponseType } from './PublicTransactionResponseType';
import {
    PublicTransactionResponseTypeFromJSON,
    PublicTransactionResponseTypeFromJSONTyped,
    PublicTransactionResponseTypeToJSON,
} from './PublicTransactionResponseType';

/**
 * 
 * @export
 * @interface PublicTransactionResponse
 */
export interface PublicTransactionResponse {
    /**
     * Public Transaction id
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    productId: string;
    /**
     * 
     * @type {PublicTransactionResponseType}
     * @memberof PublicTransactionResponse
     */
    type: PublicTransactionResponseType;
    /**
     * 
     * @type {DashboardTransactionStatuses}
     * @memberof PublicTransactionResponse
     */
    status: DashboardTransactionStatuses;
    /**
     * 
     * @type {DashboardChannelsCategories}
     * @memberof PublicTransactionResponse
     */
    channelCategory: DashboardChannelsCategories;
    /**
     * 
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    channelCode: string | null;
    /**
     * 
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    accountIdentifier: string | null;
    /**
     * customer supplied reference/external_id
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    referenceId: string;
    /**
     * 
     * @type {Currency}
     * @memberof PublicTransactionResponse
     */
    currency: Currency;
    /**
     * 
     * @type {number}
     * @memberof PublicTransactionResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    cashflow: PublicTransactionResponseCashflowEnum;
    /**
     * 
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    settlementStatus?: PublicTransactionResponseSettlementStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof PublicTransactionResponse
     */
    estimatedSettlementTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PublicTransactionResponse
     */
    businessId: string;
    /**
     * 
     * @type {PublicFeeResponse}
     * @memberof PublicTransactionResponse
     */
    fee: PublicFeeResponse;
    /**
     * 
     * @type {Date}
     * @memberof PublicTransactionResponse
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof PublicTransactionResponse
     */
    updated: Date;
}


/**
 * @export
 */
export const PublicTransactionResponseCashflowEnum = {
    In: 'MONEY_IN',
    Out: 'MONEY_OUT'
} as const;
export type PublicTransactionResponseCashflowEnum = typeof PublicTransactionResponseCashflowEnum[keyof typeof PublicTransactionResponseCashflowEnum];

/**
 * @export
 */
export const PublicTransactionResponseSettlementStatusEnum = {
    Pending: 'PENDING',
    Settled: 'SETTLED'
} as const;
export type PublicTransactionResponseSettlementStatusEnum = typeof PublicTransactionResponseSettlementStatusEnum[keyof typeof PublicTransactionResponseSettlementStatusEnum];


/**
 * Check if a given object implements the PublicTransactionResponse interface.
 */
export function instanceOfPublicTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "productId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "channelCategory" in value;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "accountIdentifier" in value;
    isInstance = isInstance && "referenceId" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "cashflow" in value;
    isInstance = isInstance && "businessId" in value;
    isInstance = isInstance && "fee" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

export function PublicTransactionResponseFromJSON(json: any): PublicTransactionResponse {
    return PublicTransactionResponseFromJSONTyped(json, false);
}

export function PublicTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'productId': json['product_id'],
        'type': PublicTransactionResponseTypeFromJSON(json['type']),
        'status': DashboardTransactionStatusesFromJSON(json['status']),
        'channelCategory': DashboardChannelsCategoriesFromJSON(json['channel_category']),
        'channelCode': json['channel_code'],
        'accountIdentifier': json['account_identifier'],
        'referenceId': json['reference_id'],
        'currency': CurrencyFromJSON(json['currency']),
        'amount': json['amount'],
        'cashflow': json['cashflow'],
        'settlementStatus': !exists(json, 'settlement_status') ? undefined : json['settlement_status'],
        'estimatedSettlementTime': !exists(json, 'estimated_settlement_time') ? undefined : (json['estimated_settlement_time'] === null ? null : new Date(json['estimated_settlement_time'])),
        'businessId': json['business_id'],
        'fee': PublicFeeResponseFromJSON(json['fee']),
        'created': (new Date(json['created'])),
        'updated': (new Date(json['updated'])),
    };
}

export function PublicTransactionResponseToJSON(value?: PublicTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'product_id': value.productId,
        'type': PublicTransactionResponseTypeToJSON(value.type),
        'status': DashboardTransactionStatusesToJSON(value.status),
        'channel_category': DashboardChannelsCategoriesToJSON(value.channelCategory),
        'channel_code': value.channelCode,
        'account_identifier': value.accountIdentifier,
        'reference_id': value.referenceId,
        'currency': CurrencyToJSON(value.currency),
        'amount': value.amount,
        'cashflow': value.cashflow,
        'settlement_status': value.settlementStatus,
        'estimated_settlement_time': value.estimatedSettlementTime === undefined ? undefined : (value.estimatedSettlementTime === null ? null : value.estimatedSettlementTime.toISOString()),
        'business_id': value.businessId,
        'fee': PublicFeeResponseToJSON(value.fee),
        'created': (value.created.toISOString()),
        'updated': (value.updated.toISOString()),
    };
}

