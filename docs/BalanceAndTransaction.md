## Balance
You can use the APIs below to interface with Xendit's `Balance` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, Balance as BalanceClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { Balance } = Xendit

const xenditBalanceClient = new BalanceClient({secretKey: YOUR_SECRET_KEY})

// At this point, `Balance` and `xenditBalanceClient` will have no usage difference
```

## To be deprecated. Backward compatible api to old /balance endpoint


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getBalance` |
| Request Parameters  |  [GetBalanceRequest](#request-parameters--GetBalanceRequest)	 |
| Return Type  |  [BalanceOld](balance_and_transaction/models/BalanceOld.md) |

### Request Parameters — `GetBalanceRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| accountType |  | &#39;CASH&#39; | &#39;HOLDING&#39; | &#39;TAX&#39; |
| currency |  | string |
| forUserId |  | string |
| idempotencyKey |  | string |

## PublicTransactions
You can use the APIs below to interface with Xendit's `PublicTransactions` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, PublicTransactions as PublicTransactionsClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { PublicTransactions } = Xendit

const xenditPublicTransactionsClient = new PublicTransactionsClient({secretKey: YOUR_SECRET_KEY})

// At this point, `PublicTransactions` and `xenditPublicTransactionsClient` will have no usage difference
```

## Get a list of transactions


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getAllTransactions` |
| Request Parameters  |  [GetAllTransactionsRequest](#request-parameters--GetAllTransactionsRequest)	 |
| Return Type  |  [PublicTransactionsResponse](balance_and_transaction/models/PublicTransactionsResponse.md) |

### Request Parameters — `GetAllTransactionsRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| forUserId |  | string |
| types |  | [[]DashboardTransactionTypes](balance_and_transaction/models/DashboardTransactionTypes.md) |
| statuses |  | [[]DashboardTransactionStatuses](balance_and_transaction/models/DashboardTransactionStatuses.md) |
| channelCategories |  | [[]DashboardChannelsCategories](balance_and_transaction/models/DashboardChannelsCategories.md) |
| referenceId |  | string |
| productId |  | string |
| accountIdentifier |  | string |
| amount |  | number |
| currency |  | [Currency](balance_and_transaction/models/Currency.md) |
| created |  | [DateRangeFilter](balance_and_transaction/models/DateRangeFilter.md) |
| updated |  | [DateRangeFilter](balance_and_transaction/models/DateRangeFilter.md) |
| limit |  | number |
| afterId |  | string |
| beforeId |  | string |
| idempotencyKey |  | string |

## Get a transaction based on its id


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getTransactionByID` |
| Request Parameters  |  [GetTransactionByIDRequest](#request-parameters--GetTransactionByIDRequest)	 |
| Return Type  |  [PublicTransactionResponse](balance_and_transaction/models/PublicTransactionResponse.md) |

### Request Parameters — `GetTransactionByIDRequest`
| Field Name |  Required  |   Type 	   |
|-----------|:----------:|:----------:|
| id | ✅ | string |
| forUserId |  | string |
| idempotencyKey |  | string |

