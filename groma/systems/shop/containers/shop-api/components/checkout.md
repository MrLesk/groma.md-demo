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
description: Places an order and delivers its receipt
---

Validates the email, looks up the product, and saves the order. Receipt delivery completes before checkout returns a delivered status.
