import Link from "next/link";
import { site } from "@/data/site";

export const metadata = { title: "About", description: `About ${site.name}.` };

const steps = [
  { title: "Talk", text: "You describe the idea, your budget and your deadline. We ask questions until it’s clear." },
  { title: "Plan", text: "We send a scope, a price and a timeline so there are no surprises." },
  { title: "Design", text: "You see screens and a clickable prototype before any code is written." },
  { title: "Build", text: "We develop in stages and show you working progress along the way." },
  { title: "Launch and support", text: "We publish it, train you to use it, and stay available for fixes and new features." },
];

export default function About() {
  return (
    <>
      <main className="wrap pagehead">
        <h1>About {site.name}</h1>
        <p>We’re a small design studio that builds websites, mobile apps and web apps for businesses.</p>
      </main>

      <section>
        <div className="wrap cols">
          <div>
            <h2>Our story</h2>
          </div>
          <div className="prose">
            <p>Write two or three short paragraphs here: when the studio started, what kind of clients you work with, and what makes your approach different.</p>
            <p>Mention the team, the tools you use, and a result you’re proud of. Real details build more trust than general claims.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>How we work</h2>
          <p className="lead">The same five steps on every project.</p>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Have a project in mind?</h2>
          <p className="lead">Send us the details and your budget and we’ll reply within two working days.</p>
          <Link className="btn" href="/#contact">Start a project</Link>
        </div>
      </section>
    </>
  );
}
