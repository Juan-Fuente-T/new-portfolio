"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, CodeXml } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { profile } from "@/app/data";

const navLinks = [
  { href: "#skills", label: "Competencias" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} variant="ghost" asChild onClick={() => setOpen(false)}>
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
      <Button asChild>
        <a href={`mailto:${profile.email}`}>Hablemos</a>
      </Button>
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`} />
          <span className={`font-bold font-headline ${isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'}`}>{profile.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={`${isScrolled ? '' : 'text-white border-white hover:bg-white/10'}`}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col items-start space-y-4 pt-8">
                  <NavContent />
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
             <nav className={`flex items-center space-x-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild className={`${isScrolled ? '' : 'hover:bg-white/10'}`}>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button asChild className={`${isScrolled ? '' : 'bg-primary-foreground text-background hover:bg-primary-foreground/90'}`}>
                <a href={`mailto:${profile.email}`}>Hablemos</a>
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
