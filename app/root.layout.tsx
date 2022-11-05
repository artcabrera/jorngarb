import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { ScrollToTop } from "./components/Buttons/ScrollToTop";
import { Cursor } from "./components/Cursor";
import { ExternalLink, InternalLink } from "./components/Link";

interface Link {
  name: string;
  link: string;
}

const navLinks: Link[] = [
  { name: "Home", link: "" },
  { name: "Projects", link: "#projects" },
  { name: "Experiments", link: "#experiments" },
  { name: "Contact", link: "#contact" },
];
const socialLinks: Link[] = [
  { name: "github", link: "#" },
  { name: "facebook", link: "#" },
  { name: "linkedin", link: "#" },
];

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <AnimatePresence>
      <main className="h-full min-h-screen w-screen bg-[#F1FFE7] text-[#3C0000] antialiased selection:bg-[#3C0000] selection:text-[#F1FFE7]">
        <div className="h-full w-full">
          <div className="fixed top-0 left-0 z-[110] flex h-full w-16 select-none flex-col font-semibold tracking-widest">
            <InternalLink
              cursorSize="48px"
              id="home"
              href="/"
              label="home"
              className="-my-4 flex aspect-[1/2] -rotate-90 items-center justify-center text-xs"
            />
            <InternalLink
              cursorSize="48px"
              id="projects"
              href="/projects"
              label="projects"
              className="-my-4 flex aspect-[1/2] -rotate-90 items-center justify-center text-xs"
            />
            <InternalLink
              cursorSize="48px"
              id="contact"
              href="/contact"
              label="contact"
              className="-my-4 flex aspect-[1/2] -rotate-90 items-center justify-center text-xs"
            />
            <div className="absolute left-1/2 top-1/2 h-1/2 w-[1px] bg-[#3C0000]" />
          </div>
          <div>
            <div>{children}</div>
            <footer className="grid select-none grid-cols-1 gap-4 py-[var(--py)] pl-16 pr-[var(--px)] text-xs font-semibold uppercase md:grid-cols-4 lg:grid-cols-5">
              <div className="col-span-1 flex items-end justify-end md:justify-start">
                <ScrollToTop>
                  <div className="group relative h-fit w-fit uppercase">
                    <span>&nbsp;back to top&nbsp;</span>
                    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                      <span
                        className={`block h-[1px] w-0 transform bg-[#3C0000] transition-all duration-500 ease-in-out group-hover:w-full`}
                      />
                    </div>
                  </div>
                </ScrollToTop>
              </div>
              <div className="col-span-1 flex flex-col items-end md:items-start">
                <ExternalLink
                  href="mailto:jbcabrera.910@gmail.com"
                  label="hello@jorngarb.dev"
                />
                <ExternalLink
                  href="tel:+639559881385"
                  label="+63 955 9881 385"
                />
                <div>&nbsp;Iloilo City</div>
                <div>&nbsp;Philippines, 5800</div>
              </div>
              <div className="col-span-1 flex flex-col items-end md:items-start md:justify-end">
                {socialLinks.map((item, index) => (
                  <ExternalLink
                    key={index}
                    href={item.link}
                    label={item.name}
                  />
                ))}
              </div>
              <div className="col-span-1 flex items-end justify-end lg:col-span-2">
                jorn blaedel garbosa 2022
              </div>
            </footer>
          </div>
          <Cursor />
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Layout;
