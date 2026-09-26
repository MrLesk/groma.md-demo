---
type: C4 Component
title: HTTP API
status: stable
groma:
  id: http-api
  parent: shop-api
  code:
    - scanner: javascript
      file: api/src/server.js
description: Receives order requests
---

Accepts POST /orders, passes the request to Checkout, and returns the order result as JSON.
