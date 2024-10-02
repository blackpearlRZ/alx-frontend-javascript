export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('HELLO');
    reject(new Error('not working'));
  });
}
