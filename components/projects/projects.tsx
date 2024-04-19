import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { ProjectCard } from './project-card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PROJECTS } from '@/lib/data';

function Projects() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="projects"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my featured projects.
            </p>
            <h2 className="text-muted-foreground font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">
              Number of projects: {PROJECTS.length}
            </h2>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent>
                {PROJECTS.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-full	xl:basis-1/2"
                  >
                    <div className="p-1">
                      <ProjectCard
                        thumbnail={`/images/projects/${data.thumbnail}`}
                        title={`${data.title}`}
                        description={`${data.description}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
