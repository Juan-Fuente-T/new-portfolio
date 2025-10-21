"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { contact, profile } from "@/app/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Check } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Contacto de ${values.name} desde el portfolio`);
    const body = encodeURIComponent(`${values.message}\n\nDe: ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Redirigiendo a tu cliente de correo",
      description: "Preparamos un borrador para que lo envíes.",
    })
  }

  return (
    <section id="contact" className="bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold">{contact.title}</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">{contact.intro}</p>
            <ul className="space-y-2">
              {contact.services.map((service) => (
                <li key={service} className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              {contact.outro}{" "}
              <a href={`mailto:${profile.email}`} className="font-semibold text-primary hover:underline">
                {profile.email}
              </a>.
            </p>
             <div className="flex flex-wrap justify-start gap-4">
              {profile.links.map((link) => (
                <Button key={link.name} variant="outline" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Cuéntame sobre tu proyecto..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Enviar Mensaje</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
