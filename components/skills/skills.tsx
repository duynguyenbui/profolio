import React from 'react';
import { CardContent, Card } from '@/components/ui/card';
import {
    Code,
  CodeIcon,
  CodeSquare,
  CodeXmlIcon,
  Container,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  TestTubes,
  WebhookIcon,
  WheatIcon,
} from 'lucide-react';
import MotionWrap from '@/components/motion-wrap';

function Skills() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="skills"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Skills
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my skills.
            </p>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <CodeSquare className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">Programing in C#</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <Code className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">ASP.NET</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <CodeXmlIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">
                      Javascript and Typescript
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <WebhookIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">NextJS</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <LayoutIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">ReactJS</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <DatabaseIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">
                      Database Management
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Storing and organizing data efficiently, especially in{' '}
                      <strong className="font-semibold">Postgres</strong> and{' '}
                      <strong className="font-semibold">MySQL</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <Container className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">Docker</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <TestTubes className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">
                      Testing with dotnet-related technologies{' '}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
