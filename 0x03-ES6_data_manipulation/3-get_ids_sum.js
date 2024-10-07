export default function getStudentIdsSum(arr) {
  return arr.reduce((prev, current) => (prev + current.id), 0);
}
