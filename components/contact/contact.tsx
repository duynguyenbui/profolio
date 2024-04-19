import React from 'react';
import MotionWrap from '../motion-wrap';
import { Button } from '../ui/button';
import { FacebookIcon, GithubIcon, YoutubeIcon } from 'lucide-react';

export const Contact = () => {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="contact"
    >
      <div className="px-4 md:px-6 py-2">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work together? Contact me via scocial
              medias
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-sm">Email:</span>
              <a href="mailto:buiduy.ng@gmail.com" className="underline ml-2">
                buiduy.ng@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-1 mr-20">
            <Button variant="outline" size="icon" asChild>
              <a target="_blank" href="https://github.com/duynguyenbui">
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a target="_blank" href="https://www.facebook.com/duynguyenn.bui">
                <FacebookIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
};
