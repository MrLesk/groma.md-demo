import { mkdir, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

export async function saveOrder(email, item) {
  const order = { id: randomUUID(), email, item: item.name, total: item.price };
  await mkdir('data/orders', { recursive: true });
  await writeFile(`data/orders/${order.id}.json`, JSON.stringify(order));
  return order;
}
