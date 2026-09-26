---
type: C4 Component
title: Receipt delivery
status: stable
groma:
  id: delivery
  parent: receipt-worker
  code:
    - scanner: javascript
      file: worker/src/delivery.js
description: Processes queued receipt jobs
---

Reads order jobs from data/receipts, prints receipt JSON messages to the terminal, and deletes each completed job. Catalog and order storage stay in the API.
