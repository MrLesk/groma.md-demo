---
id: TASK-1
title: Demonstrate receipt delivery in a separate worker
status: In Progress
assignee:
  - '@codex'
created_date: '2026-09-26 16:36'
updated_date: '2026-09-26 16:38'
labels: []
dependencies: []
references:
  - checkout
  - receipt-queue
  - delivery
  - shop-api
  - receipt-worker
modified_files:
  - .github/workflows/groma-pr.yml
  - api/src/receipt-queue.js
  - api/src/checkout.js
  - worker/package.json
  - worker/src/delivery.js
  - api/src/receipts.js
  - >-
    "backlog/tasks/task-1 -
    Demonstrate-receipt-delivery-in-a-separate-worker.md"
  - groma/systems/shop/containers/shop-api/components/receipt-queue.md
  - groma/systems/shop/containers/start/components/delivery.md
  - groma/systems/shop/containers/start/container.md
  - groma/systems/shop/containers/receipt-worker/components/delivery.md
  - groma/systems/shop/containers/receipt-worker/container.md
  - groma/systems/shop/containers/shop-api/components/receipt-delivery.md
  - groma/systems/shop/containers/shop-api/container.md
  - groma/systems/shop/containers/shop-api/components/checkout.md
  - groma/relationships.md
  - test/checkout.test.mjs
  - .github/workflows/check.yml
  - README.md
  - groma/scanners.json
type: feature
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
The permanent Groma demo PR needs a runnable before/after architecture change. The main branch delivers receipts inside checkout; this PR moves delivery to a separate process while preserving catalog and order storage.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Checkout persists an order and queues its receipt, returning queued before delivery.
- [ ] #2 Running the worker delivers queued receipt messages and removes completed jobs.
- [ ] #3 Committed Groma Markdown reflects the new responsibility and relationship boundaries, with useful source diffs and unchanged context.
- [ ] #4 The draft PR remains open and its Groma workflow publishes a working public comparison.
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
Add a filesystem receipt queue to the API and a separate Node worker that prints queued receipts. Curate the committed C4 architecture through the Groma CLI; ordinary OKF Markdown explains the same responsibilities. The queue is the file-based collaboration between two runtimes, with no new Groma model. Add one behavior test: before running the worker the receipt job exists, afterward its content has been delivered and removed. This catches accidental synchronous delivery or an inert worker; no current tests cover the demo. Use the Action example pinned to the reviewed implementation commit and verify its hosted comment and map.
<!-- SECTION:PLAN:END -->
