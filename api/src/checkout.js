import { product } from './catalog.js';
import { saveOrder } from './orders.js';
import { deliverReceipt } from './receipts.js';

export async function checkout({ email, productId }) {
  if (typeof email !== 'string' || !email.includes('@')) throw new Error('An email address is required');
  const item = product(productId);
  const order = await saveOrder(email, item);
  await deliverReceipt(order);
  return { orderId: order.id, total: order.total, receipt: 'delivered' };
}
