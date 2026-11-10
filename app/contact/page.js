import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact us", description: `Get in touch with ${site.name} about your website or app.` };

export default function Contact() {
  return (
    <>
      <main className="wrap pagehead">
        <h1>Contact us</h1>
        <p>Tell us about your project and your budget. We’ll reply within two working days.</p>
      </main>
      <section>
        <div className="wrap cols">
          <div className="details">
            <h2>Get in touch</h2>
            <dl>
              <dt>Email</dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              <dt>Phone</dt>
              <dd><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></dd>
              <dt>Hours</dt>
              <dd>{site.hours}</dd>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
