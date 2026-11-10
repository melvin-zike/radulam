import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>
          <Link href="/services">Services</Link> · <Link href="/about">About</Link> · <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
    </footer>
  );
}
