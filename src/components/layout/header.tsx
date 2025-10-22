"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, CodeXml } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { profile } from "@/app/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#skills", label: "Competencias" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.querySelector(link.href));
      let currentSection = '';

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = `#${section.id}`;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Button 
          key={link.href} 
          variant="ghost" 
          asChild 
          onClick={() => setOpen(false)}
          className={cn(
            isScrolled ? '' : 'hover:bg-white/10 text-white',
            activeSection === link.href && (isScrolled ? 'bg-accent text-accent-foreground' : 'bg-white/10')
          )}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
      <Button asChild className={cn(isScrolled ? '' : 'bg-white text-background hover:bg-white/90')}>
        <a href={`mailto:${profile.email}`}>Hablemos</a>
      </Button>
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className={cn("h-6 w-6", isScrolled ? 'text-primary' : 'text-white')} />
          <span className={cn("font-bold font-headline", isScrolled ? 'text-foreground' : 'text-white')}>{profile.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={cn(isScrolled ? '' : 'text-white border-white hover:bg-white/10')}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col items-start space-y-4 pt-8">
                  {navLinks.map((link) => (
                    <Button 
                      key={link.href} 
                      variant="ghost" 
                      asChild 
                      onClick={() => setOpen(false)}
                      className={cn(activeSection === link.href && 'bg-accent text-accent-foreground')}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                  <Button asChild>
                    <a href={`mailto:${profile.email}`}>Hablemos</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
             <nav className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Button 
                  key={link.href} 
                  variant="ghost" 
                  asChild
                  className={cn(
                    isScrolled ? '' : 'hover:bg-white/10 text-white',
                    activeSection === link.href && (isScrolled ? 'bg-accent text-accent-foreground' : 'bg-white/10')
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button asChild className={cn(isScrolled ? '' : 'bg-white text-background hover:bg-white/90')}>
                <a href={`mailto:${profile.email}`}>Hablemos</a>
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
