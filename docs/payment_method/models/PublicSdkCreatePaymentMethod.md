# PublicSDKCreatePaymentMethod



## Properties

| Name | Type | Required | Description |
| ------------ | ------------- | ------------- | ------------- |
| **type** | [PaymentMethodType](PaymentMethodType.md) | ✅ |  |
**country** | [OptionalPaymentMethodCountry](OptionalPaymentMethodCountry.md) |  |  |
**reusability** | [PaymentMethodReusability](PaymentMethodReusability.md) | ✅ |  |
**customerId** | string |  |  |
**referenceId** | string |  |  |
**description** | string |  |  |
**card** | [PublicSDKCard](PublicSDKCard.md) |  |  |
**directDebit** | [MutableDirectDebit](MutableDirectDebit.md) |  |  |
**ewallet** | [MutableEwallet](MutableEwallet.md) |  |  |
**overTheCounter** | [MutableOverTheCounter](MutableOverTheCounter.md) |  |  |
**virtualAccount** | [MutableVirtualAccount](MutableVirtualAccount.md) |  |  |
**qrCode** | [MutableQRCode](MutableQRCode.md) |  |  |
**metadata** | object |  |  |
**billingInformation** | [BillingInformation](BillingInformation.md) |  |  |


