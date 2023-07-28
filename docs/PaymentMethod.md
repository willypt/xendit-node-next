## PaymentMethods
You can use the APIs below to interface with Xendit's `PaymentMethods` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, PaymentMethods as PaymentMethodsClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { PaymentMethods } = Xendit

const xenditPaymentMethodsClient = new PaymentMethodsClient({secretKey: YOUR_SECRET_KEY})

// At this point, `PaymentMethods` and `xenditPaymentMethodsClient` will have no usage difference
```

## Validate a payment method\'s linking OTP


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `authPaymentMethod` |
| Request Parameters  |  [AuthPaymentMethodRequest](#request-parameters--AuthPaymentMethodRequest)	 |
| Return Type  |  [PublicPaymentMethod](payment_method/models/PublicPaymentMethod.md) |

### Request Parameters — `AuthPaymentMethodRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentMethodId | ✅ | string |
| idempotencyKey |  | string |
| publicAuthPaymentMethod |  | [PublicAuthPaymentMethod](payment_method/models/PublicAuthPaymentMethod.md) |

## Creates payment method


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `createPaymentMethod` |
| Request Parameters  |  [CreatePaymentMethodRequest](#request-parameters--CreatePaymentMethodRequest)	 |
| Return Type  |  [PublicPaymentMethod](payment_method/models/PublicPaymentMethod.md) |

### Request Parameters — `CreatePaymentMethodRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| publicSDKCreatePaymentMethod |  | [PublicSDKCreatePaymentMethod](payment_method/models/PublicSDKCreatePaymentMethod.md) |

## Expires a payment method


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `expirePaymentMethod` |
| Request Parameters  |  [ExpirePaymentMethodRequest](#request-parameters--ExpirePaymentMethodRequest)	 |
| Return Type  |  [PublicPaymentMethod](payment_method/models/PublicPaymentMethod.md) |

### Request Parameters — `ExpirePaymentMethodRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentMethodId | ✅ | string |
| idempotencyKey |  | string |
| publicExpirePaymentMethod |  | [PublicExpirePaymentMethod](payment_method/models/PublicExpirePaymentMethod.md) |

## Get all payment channels


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getAllPaymentChannels` |
| Request Parameters  |  [GetAllPaymentChannelsRequest](#request-parameters--GetAllPaymentChannelsRequest)	 |
| Return Type  |  [PublicPaymentChannelList](payment_method/models/PublicPaymentChannelList.md) |

### Request Parameters — `GetAllPaymentChannelsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| isActivated |  | boolean |
| type |  | string |
| idempotencyKey |  | string |

## Get all payment methods by filters


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getAllPaymentMethods` |
| Request Parameters  |  [GetAllPaymentMethodsRequest](#request-parameters--GetAllPaymentMethodsRequest)	 |
| Return Type  |  [PublicPaymentMethodList](payment_method/models/PublicPaymentMethodList.md) |

### Request Parameters — `GetAllPaymentMethodsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| id |  | []string |
| type |  | []string |
| status |  | [[]PaymentMethodStatus](payment_method/models/PaymentMethodStatus.md) |
| reusability |  | [PaymentMethodReusability](payment_method/models/PaymentMethodReusability.md) |
| customerId |  | string |
| referenceId |  | string |
| afterId |  | string |
| beforeId |  | string |
| limit |  | number |
| idempotencyKey |  | string |

## Get payment method by ID


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPaymentMethodByID` |
| Request Parameters  |  [GetPaymentMethodByIDRequest](#request-parameters--GetPaymentMethodByIDRequest)	 |
| Return Type  |  [PublicPaymentMethod](payment_method/models/PublicPaymentMethod.md) |

### Request Parameters — `GetPaymentMethodByIDRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentMethodId | ✅ | string |
| idempotencyKey |  | string |

## Returns payments with matching PaymentMethodID.


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPaymentsByPaymentMethodId` |
| Request Parameters  |  [GetPaymentsByPaymentMethodIdRequest](#request-parameters--GetPaymentsByPaymentMethodIdRequest)	 |
| Return Type  |  object |

### Request Parameters — `GetPaymentsByPaymentMethodIdRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentMethodId | ✅ | string |
| businessId |  | string |
| paymentRequestId |  | []string |
| paymentMethodId2 |  | []string |
| referenceId |  | []string |
| paymentMethodType |  | [[]PaymentMethodType](payment_method/models/PaymentMethodType.md) |
| channelCode |  | []string |
| status |  | []string |
| currency |  | []string |
| createdGte |  | Date |
| createdLte |  | Date |
| updatedGte |  | Date |
| updatedLte |  | Date |
| limit |  | number |
| afterId |  | string |
| beforeId |  | string |
| idempotencyKey |  | string |

## Patch payment methods


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `patchPaymentMethod` |
| Request Parameters  |  [PatchPaymentMethodRequest](#request-parameters--PatchPaymentMethodRequest)	 |
| Return Type  |  [PublicPaymentMethod](payment_method/models/PublicPaymentMethod.md) |

### Request Parameters — `PatchPaymentMethodRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentMethodId | ✅ | string |
| idempotencyKey |  | string |
| publicPatchPaymentMethod |  | [PublicPatchPaymentMethod](payment_method/models/PublicPatchPaymentMethod.md) |

## Makes payment with matching PaymentMethodID.


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `simulatePayment` |
| Request Parameters  |  [SimulatePaymentOperationRequest](#request-parameters--SimulatePaymentOperationRequest)	 |
| Return Type  |  [PublicSimulatePayment](payment_method/models/PublicSimulatePayment.md) |

### Request Parameters — `SimulatePaymentOperationRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentMethodId | ✅ | string |
| idempotencyKey |  | string |
| simulatePaymentRequest |  | [SimulatePaymentRequest](payment_method/models/SimulatePaymentRequest.md) |

## Simulate payment channel health


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `simulatePaymentChannelHealth` |
| Request Parameters  |  [SimulatePaymentChannelHealthRequest](#request-parameters--SimulatePaymentChannelHealthRequest)	 |
| Return Type  |  [PublicSimulatePaymentChannelHealth](payment_method/models/PublicSimulatePaymentChannelHealth.md) |

### Request Parameters — `SimulatePaymentChannelHealthRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| publicPostSimulatePaymentChannelHealth | ✅ | [PublicPostSimulatePaymentChannelHealth](payment_method/models/PublicPostSimulatePaymentChannelHealth.md) |

