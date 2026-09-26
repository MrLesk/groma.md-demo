---
type: C4 Component
title: Product catalog
status: stable
groma:
  id: catalog
  parent: shop-api
  code:
    - scanner: javascript
      file: api/src/catalog.js
      symbol: product
description: Provides product names and prices
---

Looks up the requested product. Checkout uses the result to determine the item and total for an order.
