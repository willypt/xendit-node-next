# PayoutV2Request



## Properties

Name | Type | Required | Description
------------ | ------------- | ------------- | -------------
**referenceId** | string | ✅ | A client defined payout identifier
**channelCode** | string | ✅ | Channel code of selected destination bank, e-wallet or OTC pick-up channel
**channelProperties** | [ChannelPropertiesRequest](ChannelPropertiesRequest.md) | ✅ | 
**amount** | number | ✅ | Amount to be sent to the destination account. Should be a multiple of the minimum increment for the selected channel.
**description** | string |  | Description to send with the payout. The recipient may see this e.g., in their bank statement (if supported) or in email receipts we send on your behalf.
**currency** | string | ✅ | ISO 4217 Currency Code
**receiptNotification** | [ReceiptNotification](ReceiptNotification.md) |  | 
**metadata** | object |  | Object of additional information you may use.


