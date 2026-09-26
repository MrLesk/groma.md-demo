---
type: C4 Component
title: Receipt delivery
status: stable
groma:
  id: receipt-delivery
  parent: shop-api
  code:
    - scanner: javascript
      file: api/src/receipts.js
      symbol: deliverReceipt
description: Writes receipts during checkout
---

Writes one receipt JSON message to the terminal with the order ID, recipient, item, and total. The checkout request waits for this operation.
