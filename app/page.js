import Link from "next/link";
import { site } from "@/data/site";
import { works } from "@/data/works";
import { services } from "@/data/services";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <main
        className="banner"
        style={{ backgroundImage: `linear-gradient(rgba(8,28,32,.72), rgba(8,28,32,.55)), url(${site.banner})` }}
      >
        <div className="wrap banner-inner">
          <h1>{site.tagline}</h1>
          <p>{site.intro}</p>
          <a className="btn pop" href="#contact">Tell us about your project</a>
        </div>
      </main>

      <section>
        <div className="wrap">
          <h2>What we do</h2>
          <p className="lead">Design and development for websites, apps and the tools behind them.</p>
          <ul className="tags">
            {services.map((s) => <li key={s.title}>{s.title}</li>)}
          </ul>
          <p><Link href="/services">See all services</Link></p>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <h2>Our work</h2>
          <p className="lead">Recent projects. Select one to see it live.</p>
          <div className="grid">
            {works.map((w, i) => (
              <a key={w.title} className="work" href={w.url} target="_blank" rel="noopener noreferrer">
                <div className={`shot s${(i % 6) + 1}`} style={w.image ? { backgroundImage: `url(${w.image})` } : undefined}>
                  <span>{w.type}</span>
                </div>
                <div className="body">
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
