'use client';

import { Course } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { ArrowUpDown } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: 'courseCode',
    header: 'Course Code',
  },
  {
    accessorKey: 'courseTitle',
    header: 'Course Title',
  },
  {
    accessorKey: 'courseTitleInVietnamese',
    header: 'Course Title (Vietnamese)',
  },
  {
    accessorKey: 'numberOfCredit',
    header: 'Number Of Credit',
  },
  {
    accessorKey: 'accumulation',
    header: 'Accumulation',
    cell: ({ row }) => (
      <div className='flex items-center justify-center'>
        <Checkbox disabled checked={row.getValue('accumulation')} />
      </div>
    ),
  },
  {
    accessorKey: 'group',
    header: 'Group',
  },
  {
    accessorKey: 'tenGradeSystem',
    header: '10-Grade System',
  },
  {
    accessorKey: 'letterGradeSystem',
    header: 'Letter Grade System',
  },
  {
    accessorKey: 'categories',
    header: 'Categories',
  },
  {
    accessorKey: 'semester',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Semester
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
