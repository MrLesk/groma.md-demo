import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import { it } from 'node:test';

const run = promisify(execFile);
const root = path.resolve(import.meta.dirname, '..');

it('returns a queued receipt and delivers it only when the separate worker runs', { concurrency: true }, async t => {
  const data = await mkdtemp(path.join(os.tmpdir(), 'shop-demo-'));
  t.after(() => rm(data, { recursive: true, force: true }));
  const checkoutUrl = pathToFileURL(path.join(root, 'api/src/checkout.js')).href;
  const { stdout } = await run(process.execPath, ['--input-type=module', '-e', `
    import { checkout } from ${JSON.stringify(checkoutUrl)};
    console.log(JSON.stringify(await checkout({ email: 'reader@example.com', productId: 'notebook' })));
  `], { cwd: data });
  const result = JSON.parse(stdout);
  assert.equal(result.receipt, 'queued');
  assert.equal(result.total, 1200);
  const order = JSON.parse(await readFile(path.join(data, 'data/orders', result.orderId + '.json')));
  const jobs = await readdir(path.join(data, 'data/receipts'));
  assert.deepEqual(jobs, [order.id + '.json']);

  const delivered = await run(process.execPath, [path.join(root, 'worker/src/delivery.js')], { cwd: data });
  assert.deepEqual(JSON.parse(delivered.stdout), {
    receipt: order.id, to: 'reader@example.com', item: 'Notebook', total: 1200,
  });
  assert.deepEqual(await readdir(path.join(data, 'data/receipts')), []);
});
