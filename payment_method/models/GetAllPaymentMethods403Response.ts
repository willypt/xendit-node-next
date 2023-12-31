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
 * @interface GetAllPaymentMethods403Response
 */
export interface GetAllPaymentMethods403Response {
    /**
     * 
     * @type {string}
     * @memberof GetAllPaymentMethods403Response
     */
    errorCode?: GetAllPaymentMethods403ResponseErrorCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetAllPaymentMethods403Response
     */
    message?: string;
}


/**
 * @export
 */
export const GetAllPaymentMethods403ResponseErrorCodeEnum = {
    Unauthorized: 'UNAUTHORIZED',
    ChannelNotActivated: 'CHANNEL_NOT_ACTIVATED'
} as const;
export type GetAllPaymentMethods403ResponseErrorCodeEnum = typeof GetAllPaymentMethods403ResponseErrorCodeEnum[keyof typeof GetAllPaymentMethods403ResponseErrorCodeEnum];


/**
 * Check if a given object implements the GetAllPaymentMethods403Response interface.
 */
export function instanceOfGetAllPaymentMethods403Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAllPaymentMethods403ResponseFromJSON(json: any): GetAllPaymentMethods403Response {
    return GetAllPaymentMethods403ResponseFromJSONTyped(json, false);
}

export function GetAllPaymentMethods403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllPaymentMethods403Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetAllPaymentMethods403ResponseToJSON(value?: GetAllPaymentMethods403Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
    };
}

