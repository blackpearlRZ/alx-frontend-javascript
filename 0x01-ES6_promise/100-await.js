import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const returnedObject = {};
  await Promise.all([uploadPhoto(), createUser()]).then((vals) => {
    [returnedObject.photo, returnedObject.user] = vals;
  }).catch(() => {
    returnedObject.photo = null;
    returnedObject.user = null;
  });
  return returnedObject;
}
