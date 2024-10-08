export default function updateStudentGradeByCity(arr, city, newGrades) {
  for (const grade of newGrades) {
    for (const student of arr) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
  }
  return arr.filter((val) => val.location === city).map((val) => {
    if (!('grade' in val)) {
      const newVal = val;
      newVal.grade = 'N/A';
      return newVal;
    }
    return val;
  });
}
