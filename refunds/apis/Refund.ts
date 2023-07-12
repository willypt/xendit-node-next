/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


import * as runtime from '../../runtime';
import type {
  CreateRefund,
  Refund,
  RefundList,
  RefundsPost400Response,
  RefundsPost403Response,
  RefundsPost404Response,
  RefundsPost409Response,
  RefundsPost503Response,
  RefundsPostDefaultResponse,
} from '../models';
import {
    CreateRefundFromJSON,
    CreateRefundToJSON,
    RefundFromJSON,
    RefundToJSON,
    RefundListFromJSON,
    RefundListToJSON,
    RefundsPost400ResponseFromJSON,
    RefundsPost400ResponseToJSON,
    RefundsPost403ResponseFromJSON,
    RefundsPost403ResponseToJSON,
    RefundsPost404ResponseFromJSON,
    RefundsPost404ResponseToJSON,
    RefundsPost409ResponseFromJSON,
    RefundsPost409ResponseToJSON,
    RefundsPost503ResponseFromJSON,
    RefundsPost503ResponseToJSON,
    RefundsPostDefaultResponseFromJSON,
    RefundsPostDefaultResponseToJSON,
} from '../models';

export interface RefundsPostRequest {
    idempotencyKey?: string;
    createRefund?: CreateRefund;
}

export interface RefundsRefundIDGetRequest {
    refundID: string;
    idempotencyKey?: string;
}

/**
 * 
 */
export class RefundApi extends runtime.BaseAPI {

    secretKey: string;
    xenditURL: string;

    constructor({secretKey, xenditURL}: {secretKey: string, xenditURL?: string}) {
        super()
        this.secretKey = secretKey;
        this.xenditURL = xenditURL || 'https://api.xendit.co';
    }

    /**
     */
    private async refundsGetRaw(): Promise<runtime.ApiResponse<RefundList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        const response = await this.request({
            path: `/refunds/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundListFromJSON(jsonValue));
    }

    /**
     */
    async refundsGet(): Promise<RefundList> {
        const response = await this.refundsGetRaw();
        return await response.value();
    }

    /**
     */
    private async refundsPostRaw(requestParameters: RefundsPostRequest): Promise<runtime.ApiResponse<Refund>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/refunds`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRefundToJSON(requestParameters.createRefund),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     */
    async refundsPost(idempotencyKey?: string, createRefund?: CreateRefund, ): Promise<Refund> {
        const response = await this.refundsPostRaw({ idempotencyKey: idempotencyKey, createRefund: createRefund });
        return await response.value();
    }

    /**
     */
    private async refundsRefundIDGetRaw(requestParameters: RefundsRefundIDGetRequest): Promise<runtime.ApiResponse<Refund>> {
        if (requestParameters.refundID === null || requestParameters.refundID === undefined) {
            throw new runtime.RequiredError('refundID','Required parameter requestParameters.refundID was null or undefined when calling refundsRefundIDGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/refunds/{refundID}`.replace(`{${"refundID"}}`, encodeURIComponent(String(requestParameters.refundID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     */
    async refundsRefundIDGet(refundID: string, idempotencyKey?: string, ): Promise<Refund> {
        const response = await this.refundsRefundIDGetRaw({ refundID: refundID, idempotencyKey: idempotencyKey });
        return await response.value();
    }

}
