import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl text-background">
      <div className="border-b border-background">
        <h1 className="pl-6 pt-6 font-heading text-6xl font-medium">Contact</h1>
      </div>
      <div className="flex flex-col">
        <h3 className="pl-24 pt-8 font-heading uppercase">Get In Touch</h3>
        <ContactForm />
      </div>
    </section>
  )
}
