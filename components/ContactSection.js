import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap cols">
        <div>
          <h2>Start a project</h2>
          <p className="lead">Describe what you want to build and what you plan to spend. We’ll reply within two working days.</p>
          <p>Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
