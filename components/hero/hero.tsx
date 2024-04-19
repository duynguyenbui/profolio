import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

export function Hero() {
  return (
    <MotionWrap className="mt-14 w-full py-6 md:mt-0 md:py-24 lg:py-32 xl:py-48">
      <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Senior student of Software Engineering
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi, I&apos;m Duy Nguyen
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Welcome to my portfolio, feel free work around!
          </p>
        </div>
        <Image
          alt="Image"
          className="mx-auto overflow-hidden rounded-full object-cover object-center"
          height="450"
          src={'/images/hero.jpg'}
          width="450"
        />
      </div>
    </MotionWrap>
  );
}
