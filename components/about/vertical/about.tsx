import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

function About() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-3 md:py-24 lg:py-32 dark:border-gray-700"
      id="about"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About
            </h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Currently, I am studying at Can Tho University, my major is
              Software Engineering focusing on developing, testing and mantains
              our software products in order to meet customner requirements.
            </p>
            <p className="max-w-[700px] md:text-md/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-muted-foreground">
              My strengths are flexibility to handle changes in oder to adapt
              with the growth of technologies, especially in AI era and able to
              work under pressure. During my free time, I often read books,
              listen to music, and learning new things suitable for me. By
              contrast, I think gauging how long a task will take me to finish
              is the hardest thing with me, although I ussally spend a lot of
              time, may be the whole day to complete.
            </p>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video hover:scale-105 transition overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/software.png"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
