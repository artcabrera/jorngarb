import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./root.layout";
import styles from "./globals.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Jorn Blaedel Garbosa — Web Developer",
  description: "A web developer, crafter, and problem solver.",
  "google-site-verification": "gKlXB0I5aw2uD3PmnW2Kv0xxOCQZJlfUaty2J4Hho-I",
  "og:locale": "en_PH",
  "og:type": "website",
  "og:url": "https://www.jornhub.art/",
  "og:site_name": "Jorn Blaedel Garbosa — Web Developer",
  "og:title": "Jorn Blaedel Garbosa — Web Developer",
  "og:description": "A web developer, crafter, and problem solver.",
  "og:image": "https://jornhub.art/images/share.png",
  "og:image:type": "image/png",
  "og:image:width": "1280",
  "og:image:height": "768",
  "twitter:card": "summary_large_image",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  { rel: "canonical", href: "https://www.jornhub.art" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "icon", href: "/favicon.ico" },
];

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

const Document = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#F1FFE7]">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
