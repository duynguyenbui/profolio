import { Course } from '@/types';
import { ACADEMIC_TRANSCRIPT } from './data';

export function calculateGPA(courses: Course[]) {
  let gpa = 0,
    totalCredits = 0;

  for (const course of courses) {
    if (course.accumulation) {
      const gradeMap: { [grade: string]: number } = {
        A: 4,
        'B+': 3.5,
        B: 3.0,
        'C+': 2.5,
        C: 2.0,
        'D+': 1.5,
        D: 1,
        F: 0,
      };
      const numberGradeSystem = gradeMap[course.letterGradeSystem] || 0;
      gpa += numberGradeSystem * course.numberOfCredit;
      totalCredits += course.numberOfCredit;
    }
  }

  return totalCredits ? gpa / totalCredits : 0; // Tránh chia cho 0
}

console.log(calculateGPA(ACADEMIC_TRANSCRIPT));
