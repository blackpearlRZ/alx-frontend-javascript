import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => {
      const arr = [];
      for (const output of val) {
        const object = {
	  status: output.status,
	  value: (output.value || `Error: ${output.reason.message}`),
	};
	arr.push(object);
      }
      return arr;
    });
}
