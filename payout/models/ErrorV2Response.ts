/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { ErrorV2ResponseErrorsInner } from './ErrorV2ResponseErrorsInner';
import {
    ErrorV2ResponseErrorsInnerFromJSON,
    ErrorV2ResponseErrorsInnerFromJSONTyped,
    ErrorV2ResponseErrorsInnerToJSON,
} from './ErrorV2ResponseErrorsInner';

/**
 * 
 * @export
 * @interface ErrorV2Response
 */
export interface ErrorV2Response {
    /**
     * Return a group of codes to let application to parse the error code accordingly
     * @type {string}
     * @memberof ErrorV2Response
     */
    errorCode: string;
    /**
     * Return human readable error message to let user to understand and troubleshoot error easily
     * @type {string}
     * @memberof ErrorV2Response
     */
    message: string;
    /**
     * 
     * @type {Array<ErrorV2ResponseErrorsInner>}
     * @memberof ErrorV2Response
     */
    errors?: Array<ErrorV2ResponseErrorsInner>;
}

/**
 * Check if a given object implements the ErrorV2Response interface.
 */
export function instanceOfErrorV2Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function ErrorV2ResponseFromJSON(json: any): ErrorV2Response {
    return ErrorV2ResponseFromJSONTyped(json, false);
}

export function ErrorV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': json['error_code'],
        'message': json['message'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorV2ResponseErrorsInnerFromJSON)),
    };
}

export function ErrorV2ResponseToJSON(value?: ErrorV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorV2ResponseErrorsInnerToJSON)),
    };
}

