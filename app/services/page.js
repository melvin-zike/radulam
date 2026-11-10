import Link from "next/link";
import { services } from "@/data/services";
import ContactSection from "@/components/ContactSection";

export const metadata = { title: "Services", description: "Website, mobile app, web app and UI/UX design and development." };

export default function Services() {
  return (
    <>
      <main className="wrap pagehead">
        <h1>Services</h1>
        <p>Everything you need to get a website or app designed, built and launched.</p>
      </main>
      <section>
        <div className="wrap stack">
          {services.map((s) => (
            <article key={s.title} className="service">
              <div>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
              </div>
              <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
          <p>Not sure which one you need? <Link href="/#contact">Tell us about your idea</Link> and we’ll suggest a plan.</p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
