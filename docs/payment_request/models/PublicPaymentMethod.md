# PublicPaymentMethod



## Properties

| Name | Type | Required | Description |
| ------------ | ------------- | ------------- | ------------- |
| **id** | string | ✅ |  |
**type** | [PaymentMethodType](PaymentMethodType.md) | ✅ |  |
**created** | string |  |  |
**updated** | string |  |  |
**description** | string |  |  |
**referenceId** | string |  |  |
**card** | [MutableCard](MutableCard.md) |  |  |
**directDebit** | [MutableDirectDebit](MutableDirectDebit.md) |  |  |
**ewallet** | [MutableEwallet](MutableEwallet.md) |  |  |
**overTheCounter** | [MutableOverTheCounter](MutableOverTheCounter.md) |  |  |
**virtualAccount** | [PublicVirtualAccount](PublicVirtualAccount.md) |  |  |
**qrCode** | [MutableQRCode](MutableQRCode.md) |  |  |
**reusability** | [PaymentMethodReusability](PaymentMethodReusability.md) | ✅ |  |
**status** | [PaymentMethodStatus](PaymentMethodStatus.md) | ✅ |  |
**metadata** | object |  |  |


