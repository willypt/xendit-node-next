/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


import * as runtime from '../../runtime';
import type {
  BoomError,
  Currency,
  DashboardChannelsCategories,
  DashboardTransactionStatuses,
  DashboardTransactionTypes,
  DateRangeFilter,
  PublicTransactionResponse,
  PublicTransactionsResponse,
  ValidationError,
} from '../models';
import {
    BoomErrorFromJSON,
    BoomErrorToJSON,
    CurrencyFromJSON,
    CurrencyToJSON,
    DashboardChannelsCategoriesFromJSON,
    DashboardChannelsCategoriesToJSON,
    DashboardTransactionStatusesFromJSON,
    DashboardTransactionStatusesToJSON,
    DashboardTransactionTypesFromJSON,
    DashboardTransactionTypesToJSON,
    DateRangeFilterFromJSON,
    DateRangeFilterToJSON,
    PublicTransactionResponseFromJSON,
    PublicTransactionResponseToJSON,
    PublicTransactionsResponseFromJSON,
    PublicTransactionsResponseToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface GetAllTransactionsRequest {
    forUserId?: string;
    types?: Array<DashboardTransactionTypes>;
    statuses?: Array<DashboardTransactionStatuses>;
    channelCategories?: Array<DashboardChannelsCategories>;
    referenceId?: string;
    productId?: string;
    accountIdentifier?: string;
    amount?: number;
    currency?: Currency;
    created?: DateRangeFilter;
    updated?: DateRangeFilter;
    limit?: number;
    afterId?: string;
    beforeId?: string;
    idempotencyKey?: string;
}

export interface GetTransactionByIDRequest {
    id: string;
    forUserId?: string;
    idempotencyKey?: string;
}

/**
 * 
 */
export class PublicTransactionsApi extends runtime.BaseAPI {

    secretKey: string;
    xenditURL: string;

    constructor({secretKey, xenditURL}: {secretKey: string, xenditURL?: string}) {
        const conf = new runtime.Configuration({
            basePath: xenditURL || 'https://api.xendit.co'
        })
        super(conf)
        this.secretKey = secretKey;
    }

    /**
     * Get list of transactions formatted for public view with filter and search feature.
     * Get a list of transactions
     */
    private async getAllTransactionsRaw(requestParameters: GetAllTransactionsRequest): Promise<runtime.ApiResponse<PublicTransactionsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types;
        }

        if (requestParameters.statuses) {
            queryParameters['statuses'] = requestParameters.statuses;
        }

        if (requestParameters.channelCategories) {
            queryParameters['channel_categories'] = requestParameters.channelCategories;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['reference_id'] = requestParameters.referenceId;
        }

        if (requestParameters.productId !== undefined) {
            queryParameters['product_id'] = requestParameters.productId;
        }

        if (requestParameters.accountIdentifier !== undefined) {
            queryParameters['account_identifier'] = requestParameters.accountIdentifier;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
        }

        if (requestParameters.created !== undefined) {
            queryParameters['created'] = requestParameters.created;
        }

        if (requestParameters.updated !== undefined) {
            queryParameters['updated'] = requestParameters.updated;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.afterId !== undefined) {
            queryParameters['after_id'] = requestParameters.afterId;
        }

        if (requestParameters.beforeId !== undefined) {
            queryParameters['before_id'] = requestParameters.beforeId;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
            headerParameters['for-user-id'] = String(requestParameters.forUserId);
        }

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Get list of transactions formatted for public view with filter and search feature.
     * Get a list of transactions
     */
    async getAllTransactions(requestParameters: GetAllTransactionsRequest = {}): Promise<PublicTransactionsResponse> {
        const response = await this.getAllTransactionsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get single specific transaction by transaction id.
     * Get a transaction based on its id
     */
    private async getTransactionByIDRaw(requestParameters: GetTransactionByIDRequest): Promise<runtime.ApiResponse<PublicTransactionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTransactionByID.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
            headerParameters['for-user-id'] = String(requestParameters.forUserId);
        }

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicTransactionResponseFromJSON(jsonValue));
    }

    /**
     * Get single specific transaction by transaction id.
     * Get a transaction based on its id
     */
    async getTransactionByID(requestParameters: GetTransactionByIDRequest): Promise<PublicTransactionResponse> {
        const response = await this.getTransactionByIDRaw(requestParameters);
        return await response.value();
    }

}
