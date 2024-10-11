export default function cleanSet(set, startString) {
  if (
    startString === '' || typeof startString !== 'string' || typeof set !== 'object'
  ) return '';
  const words = [];
  for (const word of set) {
    if (word && word.startsWith(startString)) {
      words.push(word.slice(startString.length));
    }
  }
  let returnStr = '';
  for (let i = 0; i < words.length; i += 1) {
    if (i !== 0) {
      returnStr += '-';
    }
    returnStr += words[i];
  }
  return (returnStr);
}
