export type Course = {
  courseCode: string;
  courseTitle: string;
  courseTitleInVietnamese: string;
  numberOfCredit: number;
  group: string;
  accumulation: boolean;
  tenGradeSystem: number | 'EX';
  letterGradeSystem:
    | 'M'
    | 'I'
    | 'W'
    | 'F'
    | 'D'
    | 'D+'
    | 'C'
    | 'C+'
    | 'B'
    | 'B+'
    | 'A';
  categories: string;
  semester:
    | 'Semester 1 Academic Year 2021-2022'
    | 'Semester 2 Academic Year 2021-2022'
    | 'Semester 3 Academic Year 2021-2022'
    | 'Semester 1 Academic Year 2022-2023'
    | 'Semester 2 Academic Year 2022-2023'
    | 'Semester 3 Academic Year 2022-2023'
    | 'Semester 1 Academic Year 2023-2024'
    | 'Semester 2 Academic Year 2023-2024'
    | 'Semester 3 Academic Year 2023-2024'
    | 'Semester 1 Academic Year 2024-2025'
    | 'Semester 2 Academic Year 2024-2025'
    | 'Semester 3 Academic Year 2024-2025';
};
