## PaymentRequests
You can use the APIs below to interface with Xendit's `PaymentRequests` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, PaymentRequests as PaymentRequestsClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { PaymentRequests } = Xendit

const xenditPaymentRequestsClient = new PaymentRequestsClient({secretKey: YOUR_SECRET_KEY})

// At this point, `PaymentRequests` and `xenditPaymentRequestsClient` will have no usage difference
```

## Payment Request Authorize


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `authorizePaymentRequest` |
| Request Parameters  |  [AuthorizePaymentRequestRequest](#request-parameters--AuthorizePaymentRequestRequest)	 |
| Return Type  |  [PublicPaymentRequest](payment_request/models/PublicPaymentRequest.md) |

### Request Parameters — `AuthorizePaymentRequestRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentRequestId | ✅ | string |
| idempotencyKey |  | string |
| publicPaymentRequestAuthorize |  | [PublicPaymentRequestAuthorize](payment_request/models/PublicPaymentRequestAuthorize.md) |

## Payment Request Capture


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `capturePaymentRequest` |
| Request Parameters  |  [CapturePaymentRequestRequest](#request-parameters--CapturePaymentRequestRequest)	 |
| Return Type  |  [Capture](payment_request/models/Capture.md) |

### Request Parameters — `CapturePaymentRequestRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentRequestId | ✅ | string |
| idempotencyKey |  | string |
| createCapture |  | [CreateCapture](payment_request/models/CreateCapture.md) |

## Create Payment Request


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `createPaymentRequest` |
| Request Parameters  |  [CreatePaymentRequestRequest](#request-parameters--CreatePaymentRequestRequest)	 |
| Return Type  |  [PublicPaymentRequest](payment_request/models/PublicPaymentRequest.md) |

### Request Parameters — `CreatePaymentRequestRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| idempotencyKey |  | string |
| publicCreatePaymentRequestSDK |  | [PublicCreatePaymentRequestSDK](payment_request/models/PublicCreatePaymentRequestSDK.md) |

## Get all payment requests by filter


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getAllPaymentRequests` |
| Request Parameters  |  [GetAllPaymentRequestsRequest](#request-parameters--GetAllPaymentRequestsRequest)	 |
| Return Type  |  [PublicPaymentRequestListResponse](payment_request/models/PublicPaymentRequestListResponse.md) |

### Request Parameters — `GetAllPaymentRequestsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| referenceId |  | []string |
| id |  | []string |
| customerId |  | []string |
| limit |  | number |
| beforeId |  | string |
| afterId |  | string |
| idempotencyKey |  | string |

## Get payment request by ID


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPaymentRequestByID` |
| Request Parameters  |  [GetPaymentRequestByIDRequest](#request-parameters--GetPaymentRequestByIDRequest)	 |
| Return Type  |  [PublicPaymentRequest](payment_request/models/PublicPaymentRequest.md) |

### Request Parameters — `GetPaymentRequestByIDRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentRequestId | ✅ | string |
| idempotencyKey |  | string |

## Get Payment Request Capture


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPaymentRequestCaptures` |
| Request Parameters  |  [GetPaymentRequestCapturesRequest](#request-parameters--GetPaymentRequestCapturesRequest)	 |
| Return Type  |  [CaptureListResponse](payment_request/models/CaptureListResponse.md) |

### Request Parameters — `GetPaymentRequestCapturesRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentRequestId | ✅ | string |
| limit |  | number |
| afterId |  | string |
| beforeId |  | string |
| idempotencyKey |  | string |

## Payment Request Resend Auth


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `resendPaymentRequestAuth` |
| Request Parameters  |  [ResendPaymentRequestAuthRequest](#request-parameters--ResendPaymentRequestAuthRequest)	 |
| Return Type  |  [PublicPaymentRequest](payment_request/models/PublicPaymentRequest.md) |

### Request Parameters — `ResendPaymentRequestAuthRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| paymentRequestId | ✅ | string |
| idempotencyKey |  | string |

