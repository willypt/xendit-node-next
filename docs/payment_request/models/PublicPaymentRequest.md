# PublicPaymentRequest



## Properties

Name | Type | Required | Description
------------ | ------------- | ------------- | -------------
**id** | string | ✅ | 
**created** | string | ✅ | 
**updated** | string | ✅ | 
**referenceId** | string | ✅ | 
**businessId** | string | ✅ | 
**customerId** | string |  | 
**customer** | object |  | 
**amount** | number |  | 
**minAmount** | number |  | 
**maxAmount** | number |  | 
**country** | [PaymentRequestCountry](PaymentRequestCountry.md) |  | 
**currency** | [PaymentRequestCurrency](PaymentRequestCurrency.md) | ✅ | 
**paymentMethod** | [PublicPaymentMethod](PublicPaymentMethod.md) | ✅ | 
**description** | string |  | 
**failureCode** | string |  | 
**captureMethod** | [PaymentRequestCaptureMethod](PaymentRequestCaptureMethod.md) |  | 
**initiator** | [PaymentRequestInitiator](PaymentRequestInitiator.md) |  | 
**cardVerificationResults** | [PaymentRequestCardVerificationResults](PaymentRequestCardVerificationResults.md) |  | 
**status** | [PaymentRequestStatus](PaymentRequestStatus.md) | ✅ | 
**actions** | [[]PaymentRequestAction](PaymentRequestAction.md) |  | 
**metadata** | object |  | 
**shippingInformation** | [PaymentRequestShippingInformation](PaymentRequestShippingInformation.md) |  | 
**items** | [[]PaymentRequestBasketItem](PaymentRequestBasketItem.md) |  | 


