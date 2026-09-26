import { mkdir, readdir, readFile, unlink } from 'node:fs/promises';

// Run separately from the API to deliver all receipts currently in the inbox.
await mkdir('data/receipts', { recursive: true });
for (const filename of await readdir('data/receipts')) {
  const file = `data/receipts/${filename}`;
  const order = JSON.parse(await readFile(file, 'utf8'));
  process.stdout.write(JSON.stringify({ receipt: order.id, to: order.email, item: order.item, total: order.total }) + '\n');
  await unlink(file);
}
