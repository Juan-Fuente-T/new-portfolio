import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects, linkIcons, type Project } from "@/app/data";
import { CheckCircle2 } from "lucide-react";

const ProjectLink = ({ link }: { link: Project['links'][0] }) => {
  const Icon = linkIcons[link.label] || linkIcons['default'];
  return (
    <Button variant="outline" size="sm" asChild>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <Icon className="mr-2 h-4 w-4" />
        {link.label}
      </a>
    </Button>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold">
            Proyectos Destacados
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold font-headline">{project.title}</CardTitle>
                  <Badge variant={project.status.emoji === '✅' ? 'default' : 'secondary'} className="bg-accent text-accent-foreground">
                    {project.status.emoji} {project.status.text}
                  </Badge>
                </div>
                <CardDescription>{project.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <h4 className="mb-2 font-semibold">Puntos clave:</h4>
                <ul className="mb-4 space-y-2 text-muted-foreground">
                  {project.keyPoints.map((point) => (
                    <li key={point} className="flex">
                      <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <ProjectLink key={link.label} link={link} />
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
