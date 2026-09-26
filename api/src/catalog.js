const products = new Map([
  ['notebook', { name: 'Notebook', price: 1200 }],
  ['pencil', { name: 'Pencil', price: 200 }],
]);

export function product(id) {
  const item = products.get(id);
  if (!item) throw new Error('Unknown product');
  return item;
}
