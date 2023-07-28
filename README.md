![Xendit Node SDK](images/header.jpg)

# Xendit Node SDK

The official Xendit Node SDK provides a simple and convenient way to call Xendit's REST API
in applications written in Node.

* Package version: 3.0.0-beta.3

# Getting Started

## Installation

### Requirements

Node 16.0 and later.

### Install with npm
```bash
npm install xendit-node@latest --save
```

TypeScript support is included in this package.

## Authorization

The SDK needs to be instantiated using your secret API key obtained from the [Xendit Dashboard](https://dashboard.xendit.co/settings/developers#api-keys).
You can sign up for a free Dashboard account [here](https://dashboard.xendit.co/register).

```typescript
import { Xendit } from 'xendit-node';

const xenditClient = new Xendit({
  secretKey: SECRET_API_KEY,
})
```

### Custom Xendit URL
By default, the SDK will use the Xendit production URL (`https://api.xendit.co`) to make API requests.<br/>
If you need to override the default Xendit URL, you can pass in a custom URL to the `Xendit` constructor.

```typescript
const xenditClient = new Xendit({
  secretKey: SECRET_API_KEY,
  xenditURL: 'https://mock-server.localhost:3000',
})
```

# Documentation

Find detailed API information and examples for each of our product’s by clicking the links below,
* [PaymentRequests](docs/PaymentRequests.md)
* [PaymentMethods](docs/PaymentMethods.md)
* [Balance](docs/Balance.md)* [PublicTransactions](docs/PublicTransactions.md)
* [Refund](docs/Refund.md)
* [Payouts](docs/Payouts.md)


Further Reading

* [Xendit Docs](https://docs.xendit.co/)
* [Xendit API Reference](https://developers.xendit.co/)