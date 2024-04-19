// import { BackgroundGradientAnimation } from '@/components/bg-gradient';
import About from '@/components/about/vertical/about';
import { Contact } from '@/components/contact/contact';
import { Education } from '@/components/education/education';
import Footer from '@/components/footet';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <BackgroundGradientAnimation> */}
      <div className="absolute inset-0 z-50 h-full w-full">
        <div className="flex min-h-[100dvh] flex-col">
          <Header />
          <main className="flex-1">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
      {/* </BackgroundGradientAnimation> */}
    </div>
  );
}
