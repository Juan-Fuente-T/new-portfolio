import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import PhilosophySection from '@/components/sections/philosophy';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
