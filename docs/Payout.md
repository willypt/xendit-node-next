## Payouts
You can use the APIs below to interface with Xendit's `Payouts` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, Payouts as PayoutsClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { Payouts } = xenditClient

const xenditPayoutsClient = new PayoutsClient({secretKey: YOUR_SECRET_KEY})

// At this point, `Payouts` and `xenditPayoutsClient` will have no usage difference, for example:
// Payouts.cancelPayout()
// or
// xenditPayoutsClient.cancelPayout()
```

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `cancelPayout` |
| Request Parameters  |  [CancelPayoutRequest](#request-parameters--CancelPayoutRequest)	 |
| Return Type  |  [GetPayouts200ResponseDataInner](payout/models/GetPayouts200ResponseDataInner.md) |

### Request Parameters — `CancelPayoutRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| id | ✅ | string |
| idempotencyKey |  | string |

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `createPayout` |
| Request Parameters  |  [CreatePayoutRequest](#request-parameters--CreatePayoutRequest)	 |
| Return Type  |  [GetPayouts200ResponseDataInner](payout/models/GetPayouts200ResponseDataInner.md) |

### Request Parameters — `CreatePayoutRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| idempotencyKey | ✅ | string |
| forUserId |  | string |
| payoutV2Request |  | [PayoutV2Request](payout/models/PayoutV2Request.md) |

### Usage Examples
#### Bank Payout

```typescript
const response = await Payouts.createPayout({
  "reference_id" : "DISB-001",
  "currency" : "PHP",
  "channel_code" : "PH_BDO",
  "channel_properties" : {
    "account_holder_name" : "John Doe",
    "account_number" : "000000"
  },
  "amount" : 90000,
  "description" : "Test Bank Payout",
  "type" : "DIRECT_DISBURSEMENT"
})
```
#### OTC Payout

```typescript
const response = await Payouts.createPayout({
  "reference_id" : "DISB-002",
  "currency" : "IDR",
  "channel_code" : "ID_ALFAMART",
  "channel_properties" : {
    "recipient_given_names" : "John",
    "recipient_surname" : "Doe",
    "expires_at" : "2020-12-11T17:00:00.000Z"
  },
  "amount" : 90000,
  "description" : "Test OTC Payout",
  "type" : "DIRECT_DISBURSEMENT"
})
```
## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPayoutById` |
| Request Parameters  |  [GetPayoutByIdRequest](#request-parameters--GetPayoutByIdRequest)	 |
| Return Type  |  [GetPayouts200ResponseDataInner](payout/models/GetPayouts200ResponseDataInner.md) |

### Request Parameters — `GetPayoutByIdRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| id | ✅ | string |
| idempotencyKey |  | string |

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPayoutChannels` |
| Request Parameters  |  [GetPayoutChannelsRequest](#request-parameters--GetPayoutChannelsRequest)	 |
| Return Type  |  [Array<PayoutChannelV2>](payout/models/PayoutChannelV2.md) |

### Request Parameters — `GetPayoutChannelsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| currency |  | string |
| channelCategory |  | [[]PayoutChannelV2CategoryRequest](payout/models/PayoutChannelV2CategoryRequest.md) |
| channelCode |  | string |
| idempotencyKey |  | string |

## 


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPayouts` |
| Request Parameters  |  [GetPayoutsRequest](#request-parameters--GetPayoutsRequest)	 |
| Return Type  |  [GetPayouts200Response](payout/models/GetPayouts200Response.md) |

### Request Parameters — `GetPayoutsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| referenceId | ✅ | string |
| limit |  | number |
| afterId |  | string |
| beforeId |  | string |
| idempotencyKey |  | string |

