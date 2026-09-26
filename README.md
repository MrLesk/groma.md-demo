# Groma PR comparison demo

A small runnable shop shows how a GitHub PR changes architecture and source together. The permanent draft PR moves receipt delivery out of checkout and into a separate worker. It stays open as a live example.

This demo uses Node 24 and has no package dependencies. Receipts are JSON messages printed to the terminal; no email service or account is needed.

```sh
node api/src/server.js
```

In another terminal:

```sh
curl -X POST http://localhost:3000/orders \
  -H 'content-type: application/json' \
  -d '{"email":"reader@example.com","productId":"notebook"}'
```

On `main`, checkout saves an order and delivers its receipt before returning. Products and prices come from the catalog; orders are stored in `data/orders/`. This is a local review example, without payment processing.

The committed `groma/` folder describes the same behavior as ordinary Markdown. Groma adds the C4 structure and exact source ownership needed for its comparison map. The PR workflow comes from [groma.md-action](https://github.com/MrLesk/groma.md-action).
