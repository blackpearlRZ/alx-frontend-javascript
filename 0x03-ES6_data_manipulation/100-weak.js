export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint);
  if (count === undefined) {
    weakMap.set(endpoint, 1);
    return 1;
  }
  count += 1;
  weakMap.set(endpoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  return count;
}
