## Refund
You can use the APIs below to interface with Xendit's `Refund` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, Refund as RefundClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { Refund } = xenditClient

const xenditRefundClient = new RefundClient({secretKey: YOUR_SECRET_KEY})

// At this point, `Refund` and `xenditRefundClient` will have no usage difference, for example:
// Refund.cancelRefund()
// or
// xenditRefundClient.cancelRefund()
```

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `cancelRefund` |
| Request Parameters  |  [CancelRefundRequest](#request-parameters--CancelRefundRequest)	 |
| Return Type  |  [Refund](refund/models/Refund.md) |

### Request Parameters — `CancelRefundRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| refundID | ✅ | string |
| idempotencyKey |  | string |

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `createRefund` |
| Request Parameters  |  [CreateRefundRequest](#request-parameters--CreateRefundRequest)	 |
| Return Type  |  [Refund](refund/models/Refund.md) |

### Request Parameters — `CreateRefundRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| idempotencyKey |  | string |
| createRefund |  | [CreateRefund](refund/models/CreateRefund.md) |

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getAllRefunds` |
| Request Parameters  |  [GetAllRefundsRequest](#request-parameters--GetAllRefundsRequest)	 |
| Return Type  |  [RefundList](refund/models/RefundList.md) |

### Request Parameters — `GetAllRefundsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getRefund` |
| Request Parameters  |  [GetRefundRequest](#request-parameters--GetRefundRequest)	 |
| Return Type  |  [Refund](refund/models/Refund.md) |

### Request Parameters — `GetRefundRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| refundID | ✅ | string |
| idempotencyKey |  | string |

