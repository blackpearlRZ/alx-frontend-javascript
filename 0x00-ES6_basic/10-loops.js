export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  const arr = [];
  for (const str of array) {
    arr[count] = appendString + str;
    count += 1;
  }

  return arr;
}
