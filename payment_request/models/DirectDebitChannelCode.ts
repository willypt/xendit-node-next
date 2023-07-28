/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * Direct Debit Channel Code
 * @export
 */
export const DirectDebitChannelCode = {
    BcaKlikpay: 'BCA_KLIKPAY',
    BcaOneklik: 'BCA_ONEKLIK',
    Bri: 'BRI',
    Bni: 'BNI',
    Mandiri: 'MANDIRI',
    Bpi: 'BPI',
    Bdo: 'BDO',
    Cimbniaga: 'CIMBNIAGA',
    Mtb: 'MTB',
    Rcbc: 'RCBC',
    Ubp: 'UBP',
    AutodebitUbp: 'AUTODEBIT_UBP',
    Chinabank: 'CHINABANK',
    Bay: 'BAY',
    Ktb: 'KTB',
    Bbl: 'BBL',
    Scb: 'SCB',
    KbankMb: 'KBANK_MB',
    BayMb: 'BAY_MB',
    KtbMb: 'KTB_MB',
    BblMb: 'BBL_MB',
    ScbMb: 'SCB_MB',
    BdoEpay: 'BDO_EPAY',
    AffinFpx: 'AFFIN_FPX',
    AgroFpx: 'AGRO_FPX',
    AllianceFpx: 'ALLIANCE_FPX',
    AmbankFpx: 'AMBANK_FPX',
    IslamFpx: 'ISLAM_FPX',
    MuamalatFpx: 'MUAMALAT_FPX',
    BocFpx: 'BOC_FPX',
    RakyatFpx: 'RAKYAT_FPX',
    BsnFpx: 'BSN_FPX',
    CimbFpx: 'CIMB_FPX',
    HlbFpx: 'HLB_FPX',
    HsbcFpx: 'HSBC_FPX',
    KfhFpx: 'KFH_FPX',
    Mayb2EFpx: 'MAYB2E_FPX',
    Mayb2UFpx: 'MAYB2U_FPX',
    OcbcFpx: 'OCBC_FPX',
    PublicFpx: 'PUBLIC_FPX',
    RhbFpx: 'RHB_FPX',
    SchFpx: 'SCH_FPX',
    UobFpx: 'UOB_FPX'
} as const;
export type DirectDebitChannelCode = typeof DirectDebitChannelCode[keyof typeof DirectDebitChannelCode];


export function DirectDebitChannelCodeFromJSON(json: any): DirectDebitChannelCode {
    return DirectDebitChannelCodeFromJSONTyped(json, false);
}

export function DirectDebitChannelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectDebitChannelCode {
    return json as DirectDebitChannelCode;
}

export function DirectDebitChannelCodeToJSON(value?: DirectDebitChannelCode | null): any {
    return value as any;
}

