import { Button } from "@/components/ui/button";
import { profile } from "@/app/data";
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="bg-background">
      <div className="container flex max-w-screen-md flex-col items-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-primary sm:text-xl lg:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
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
