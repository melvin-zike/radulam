"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="wrap">
      <header>
        <Link className="brand" href="/" onClick={close}>
          <img src={site.logo} alt="" width="36" height="36" />
          <span>{site.name}</span>
        </Link>
        <button
          className="menubtn"
          type="button"
          aria-expanded={open}
          aria-controls="mainnav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav id="mainnav" aria-label="Main" className={open ? "open" : ""}>
          <Link href="/services" onClick={close}>Services</Link>
          <Link href="/#work" onClick={close}>Our work</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link className="navcta" href="/#contact" onClick={close}>Start a project</Link>
        </nav>
      </header>
    </div>
  );
}
