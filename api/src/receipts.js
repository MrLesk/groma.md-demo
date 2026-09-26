export async function deliverReceipt(order) {
  process.stdout.write(JSON.stringify({ receipt: order.id, to: order.email, item: order.item, total: order.total }) + '\n');
}
