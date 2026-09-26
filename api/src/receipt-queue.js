import { mkdir, writeFile } from 'node:fs/promises';

export async function queueReceipt(order) {
  await mkdir('data/receipts', { recursive: true });
  await writeFile(`data/receipts/${order.id}.json`, JSON.stringify(order));
}
