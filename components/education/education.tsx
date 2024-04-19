import React from 'react';
import MotionWrap from '../motion-wrap';
import { DataTable } from './data-table';
import { columns } from './columns';
import { Course } from '@/types';
import { ACADEMIC_TRANSCRIPT } from '@/lib/data';
import { calculateGPA } from '@/lib/calculate';

export const Education = () => {
  const data: Course[] = ACADEMIC_TRANSCRIPT;

  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-3 md:py-14 lg:py-24 dark:border-gray-700"
      id="education"
    >
      <div className="p-4">
        <div className="p-4">
          {/* TODO: Caculate based on real accademic transcript */}
          <p className="font-bold text-xl">
            Current GPA: {calculateGPA(ACADEMIC_TRANSCRIPT).toFixed(2)}/4.00
          </p>
          <p>
            The table shows the progress studying Software Engineering at Can
            Tho University between 2021 to 2024.
          </p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </MotionWrap>
  );
};
