---
type: C4 Container
title: Receipt worker
status: stable
groma:
  id: receipt-worker
  parent: shop
  technology: Node.js process
description: Delivers queued receipts outside checkout
---

Runs separately from the HTTP API. Each invocation drains the current receipt inbox and exits, so checkout can finish before delivery begins.
