---
type: C4 Component
title: Receipt queue
status: stable
groma:
  id: receipt-queue
  parent: shop-api
  code:
    - scanner: javascript
      file: api/src/receipt-queue.js
      symbol: queueReceipt
description: Hands receipt jobs to the worker
---

Writes the completed order to data/receipts as a JSON job. This directory connects the API and worker processes without requiring them to run at the same time.
