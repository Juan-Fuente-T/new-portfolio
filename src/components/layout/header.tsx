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
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollPosition > 10);

      // Check if scrolled to the bottom of the page
      if (windowHeight + scrollPosition >= documentHeight - 10) {
        setActiveSection('#contact');
        return;
      }

      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - 100) {
            currentSection = link.href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to set initial state

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
            'text-foreground',
            activeSection === link.href && 'bg-accent text-accent-foreground'
          )}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-foreground">{profile.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-foreground border-border hover:bg-accent hover:text-accent-foreground">
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
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
             <nav className="flex items-center space-x-2">
              <NavContent/>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}