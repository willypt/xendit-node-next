# PublicPaymentMethod



## Properties

| Name | Type | Required | Description |
| ------------ | ------------- | ------------- | ------------- |
| **id** | string | ✅ |  |
**businessId** | string |  |  |
**type** | [PaymentMethodType](PaymentMethodType.md) |  |  |
**country** | [PaymentMethodCountry](PaymentMethodCountry.md) |  |  |
**customerId** | string |  |  |
**customer** | object |  |  |
**referenceId** | string |  |  |
**description** | string |  |  |
**status** | [PaymentMethodStatus](PaymentMethodStatus.md) |  |  |
**reusability** | [PaymentMethodReusability](PaymentMethodReusability.md) |  |  |
**actions** | [[]PaymentMethodAction](PaymentMethodAction.md) |  |  |
**metadata** | object |  |  |
**billingInformation** | [BillingInformation](BillingInformation.md) |  |  |
**failureCode** | string |  |  |
**created** | Date |  |  |
**updated** | Date |  |  |
**ewallet** | [PublicEwallet](PublicEwallet.md) |  |  |
**directDebit** | [PublicDirectDebit](PublicDirectDebit.md) |  |  |
**overTheCounter** | [PublicOverTheCounter](PublicOverTheCounter.md) |  |  |
**card** | [PublicCard](PublicCard.md) |  |  |
**qrCode** | [PublicQRCode](PublicQRCode.md) |  |  |


