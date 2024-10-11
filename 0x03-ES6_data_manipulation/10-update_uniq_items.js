export default function updateUniqueItems(map) {
  try {
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  } catch (err) {
    throw new Error('Cannot process');
  }
}
