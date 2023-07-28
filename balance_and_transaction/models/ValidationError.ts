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
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {number}
     * @memberof ValidationError
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    error: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    message: string;
    /**
     * 
     * @type {object}
     * @memberof ValidationError
     */
    validation: object;
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "validation" in value;

    return isInstance;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'error': json['error'],
        'message': json['message'],
        'validation': json['validation'],
    };
}

export function ValidationErrorToJSON(value?: ValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_code': value.statusCode,
        'error': value.error,
        'message': value.message,
        'validation': value.validation,
    };
}
