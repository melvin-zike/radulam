import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} – Web and app design`, template: `%s – ${site.name}` },
  description: site.intro,
  icons: { icon: site.logo },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
