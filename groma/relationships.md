---
type: Groma Relationships
title: Architecture relationships
---

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [Customer](actors/customer.md) | [HTTP API](systems/shop/containers/shop-api/components/http-api.md) | Places orders | HTTP |
| [api/src/server.js](../api/src/server.js) | [api/src/checkout.js](../api/src/checkout.js) | Submits checkout | JavaScript |
| [api/src/checkout.js](../api/src/checkout.js) | [api/src/catalog.js](../api/src/catalog.js) | Looks up product | JavaScript |
| [api/src/checkout.js](../api/src/checkout.js) | [api/src/orders.js](../api/src/orders.js) | Stores order | JavaScript |
| [api/src/checkout.js](../api/src/checkout.js) | [api/src/receipts.js](../api/src/receipts.js) | Delivers receipt | JavaScript |
| [api/src/checkout.js](../api/src/checkout.js) | [api/src/receipt-queue.js](../api/src/receipt-queue.js) | Queues receipt | JavaScript |
| [api/src/receipt-queue.js](../api/src/receipt-queue.js) | [worker/src/delivery.js](../worker/src/delivery.js) | Supplies receipt jobs | JSON files |
