/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


import * as runtime from '../../runtime';
import type {
  BalanceOld,
  BoomError,
  ValidationError,
} from '../models';
import {
    BalanceOldFromJSON,
    BalanceOldToJSON,
    BoomErrorFromJSON,
    BoomErrorToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface GetBalanceOldRequest {
    accountType?: GetBalanceOldAccountTypeEnum;
    currency?: string;
    forUserId?: string;
    idempotencyKey?: string;
}

/**
 * 
 */
export class Balance extends runtime.BaseAPI {

    secretKey: string;
    xenditURL: string;

    constructor({secretKey, xenditURL}: {secretKey: string, xenditURL?: string}) {
        super()
        this.secretKey = secretKey;
        this.xenditURL = xenditURL || 'https://api.xendit.co';
    }

    /**
     * Backward compatible api to the old balance endpoint. https://xendit.github.io/apireference/#balances
     * To be deprecated. Backward compatible api to old /balance endpoint
     */
    private async getBalanceOldRaw(requestParameters: GetBalanceOldRequest): Promise<runtime.ApiResponse<BalanceOld>> {
        const queryParameters: any = {};

        if (requestParameters.accountType !== undefined) {
            queryParameters['account_type'] = requestParameters.accountType;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
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
            path: `/balance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BalanceOldFromJSON(jsonValue));
    }

    /**
     * Backward compatible api to the old balance endpoint. https://xendit.github.io/apireference/#balances
     * To be deprecated. Backward compatible api to old /balance endpoint
     */
    async getBalanceOld(requestParameters: GetBalanceOldRequest = {}): Promise<BalanceOld> {
        const response = await this.getBalanceOldRaw(requestParameters);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetBalanceOldAccountTypeEnum = {
    Cash: 'CASH',
    Holding: 'HOLDING',
    Tax: 'TAX'
} as const;
export type GetBalanceOldAccountTypeEnum = typeof GetBalanceOldAccountTypeEnum[keyof typeof GetBalanceOldAccountTypeEnum];
