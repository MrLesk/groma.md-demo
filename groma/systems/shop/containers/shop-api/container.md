---
type: C4 Container
title: Shop API
status: stable
groma:
  id: shop-api
  parent: shop
  technology: Node.js HTTP
description: Accepts and records orders
---

The HTTP application accepts POST /orders. Checkout reads the catalog, stores the order, and delivers its receipt before responding.
