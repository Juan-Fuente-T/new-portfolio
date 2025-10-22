import { Button } from "@/components/ui/button";
import { profile } from "@/app/data";
import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Código en un monitor"
        fill
        className="object-cover  opacity-40"
        data-ai-hint="programming code"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-primary-foreground/90 sm:text-xl lg:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 mx-auto max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
          {profile.bio}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {profile.links.map((link) => (
            <Button key={link.name} variant="outline" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </a>
            </Button>
          ))}
           <Button variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
