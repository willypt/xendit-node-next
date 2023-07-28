/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface PayoutV2ResponseAllOf
 */
export interface PayoutV2ResponseAllOf {
    /**
     * Xendit-generated unique identifier for each payout
     * @type {string}
     * @memberof PayoutV2ResponseAllOf
     */
    id: string;
    /**
     * ISO 8601
     * @type {Date}
     * @memberof PayoutV2ResponseAllOf
     */
    created: Date;
    /**
     * ISO 8601
     * @type {Date}
     * @memberof PayoutV2ResponseAllOf
     */
    updated: Date;
    /**
     * Xendit Business ID
     * @type {string}
     * @memberof PayoutV2ResponseAllOf
     */
    businessId: string;
    /**
     * Status of payout
     * @type {string}
     * @memberof PayoutV2ResponseAllOf
     */
    status: PayoutV2ResponseAllOfStatusEnum;
    /**
     * If the Payout failed, we include a failure code for more details on the failure.
     * @type {string}
     * @memberof PayoutV2ResponseAllOf
     */
    failureCode?: PayoutV2ResponseAllOfFailureCodeEnum;
    /**
     * 
     * @type {Date}
     * @memberof PayoutV2ResponseAllOf
     */
    estimatedArrivalTime?: Date;
}


/**
 * @export
 */
export const PayoutV2ResponseAllOfStatusEnum = {
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    Accepted: 'ACCEPTED',
    Requested: 'REQUESTED',
    Locked: 'LOCKED',
    Expired: 'EXPIRED',
    Cancelled: 'CANCELLED',
    Reversed: 'REVERSED'
} as const;
export type PayoutV2ResponseAllOfStatusEnum = typeof PayoutV2ResponseAllOfStatusEnum[keyof typeof PayoutV2ResponseAllOfStatusEnum];

/**
 * @export
 */
export const PayoutV2ResponseAllOfFailureCodeEnum = {
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    RejectedByChannel: 'REJECTED_BY_CHANNEL',
    TemporaryTransferError: 'TEMPORARY_TRANSFER_ERROR',
    InvalidDestination: 'INVALID_DESTINATION',
    TransferError: 'TRANSFER_ERROR'
} as const;
export type PayoutV2ResponseAllOfFailureCodeEnum = typeof PayoutV2ResponseAllOfFailureCodeEnum[keyof typeof PayoutV2ResponseAllOfFailureCodeEnum];


/**
 * Check if a given object implements the PayoutV2ResponseAllOf interface.
 */
export function instanceOfPayoutV2ResponseAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "businessId" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function PayoutV2ResponseAllOfFromJSON(json: any): PayoutV2ResponseAllOf {
    return PayoutV2ResponseAllOfFromJSONTyped(json, false);
}

export function PayoutV2ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutV2ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': (new Date(json['created'])),
        'updated': (new Date(json['updated'])),
        'businessId': json['business_id'],
        'status': json['status'],
        'failureCode': !exists(json, 'failure_code') ? undefined : json['failure_code'],
        'estimatedArrivalTime': !exists(json, 'estimated_arrival_time') ? undefined : (new Date(json['estimated_arrival_time'])),
    };
}

export function PayoutV2ResponseAllOfToJSON(value?: PayoutV2ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created': (value.created.toISOString()),
        'updated': (value.updated.toISOString()),
        'business_id': value.businessId,
        'status': value.status,
        'failure_code': value.failureCode,
        'estimated_arrival_time': value.estimatedArrivalTime === undefined ? undefined : (value.estimatedArrivalTime.toISOString()),
    };
}
