# PublicTransactionResponse



## Properties

| Name | Type | Required | Description |
| ------------ | ------------- | ------------- | ------------- |
| **id** | string | ✅ | Public Transaction id |
**productId** | string | ✅ |  |
**type** | [PublicTransactionResponseType](PublicTransactionResponseType.md) | ✅ |  |
**status** | [DashboardTransactionStatuses](DashboardTransactionStatuses.md) | ✅ |  |
**channelCategory** | [DashboardChannelsCategories](DashboardChannelsCategories.md) | ✅ |  |
**channelCode** | string | ✅ |  |
**accountIdentifier** | string | ✅ |  |
**referenceId** | string | ✅ | customer supplied reference/external_id |
**currency** | [Currency](Currency.md) | ✅ |  |
**amount** | number | ✅ |  |
**cashflow** | string | ✅ |  |
**settlementStatus** | string |  |  |
**estimatedSettlementTime** | Date |  |  |
**businessId** | string | ✅ |  |
**fee** | [PublicFeeResponse](PublicFeeResponse.md) | ✅ |  |
**created** | Date | ✅ |  |
**updated** | Date | ✅ |  |


