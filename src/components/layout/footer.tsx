import { profile } from "@/app/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} {profile.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
