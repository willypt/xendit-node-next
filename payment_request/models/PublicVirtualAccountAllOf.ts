/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { VirtualAccountAlternativeDisplay } from './VirtualAccountAlternativeDisplay';
import {
    VirtualAccountAlternativeDisplayFromJSON,
    VirtualAccountAlternativeDisplayFromJSONTyped,
    VirtualAccountAlternativeDisplayToJSON,
} from './VirtualAccountAlternativeDisplay';

/**
 * 
 * @export
 * @interface PublicVirtualAccountAllOf
 */
export interface PublicVirtualAccountAllOf {
    /**
     * 
     * @type {Array<VirtualAccountAlternativeDisplay>}
     * @memberof PublicVirtualAccountAllOf
     */
    alternativeDisplays?: Array<VirtualAccountAlternativeDisplay>;
}

/**
 * Check if a given object implements the PublicVirtualAccountAllOf interface.
 */
export function instanceOfPublicVirtualAccountAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublicVirtualAccountAllOfFromJSON(json: any): PublicVirtualAccountAllOf {
    return PublicVirtualAccountAllOfFromJSONTyped(json, false);
}

export function PublicVirtualAccountAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicVirtualAccountAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternativeDisplays': !exists(json, 'alternative_displays') ? undefined : ((json['alternative_displays'] as Array<any>).map(VirtualAccountAlternativeDisplayFromJSON)),
    };
}

export function PublicVirtualAccountAllOfToJSON(value?: PublicVirtualAccountAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternative_displays': value.alternativeDisplays === undefined ? undefined : ((value.alternativeDisplays as Array<any>).map(VirtualAccountAlternativeDisplayToJSON)),
    };
}

