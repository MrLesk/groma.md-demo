---
type: C4 Component
title: Order storage
status: stable
groma:
  id: order-store
  parent: shop-api
  code:
    - scanner: javascript
      file: api/src/orders.js
      symbol: saveOrder
description: Persists accepted orders
---

Assigns each order an ID and stores its email, item, and total in data/orders as a JSON file.
