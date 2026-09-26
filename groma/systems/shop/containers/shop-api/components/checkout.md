---
type: C4 Component
title: Checkout
status: stable
groma:
  id: checkout
  parent: shop-api
  code:
    - scanner: javascript
      file: api/src/checkout.js
      symbol: checkout
description: Places an order and queues its receipt
---

Validates the email, looks up the product, and saves the order. It writes a receipt job and returns a queued status without waiting for receipt delivery.
