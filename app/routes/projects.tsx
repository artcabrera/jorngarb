import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => ({
  title: "Projects | Jorn Blaedel Garbosa — Web Developer",
});

const Projects = () => {
  return (
    <div key="work" className="relative h-full w-full overflow-hidden">
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "-100vh" }}
        exit={{ y: "100vh" }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0, 1, 1, 0],
        }}
        className="absolute top-0 left-0 z-[111] h-screen w-full bg-[#F4B393]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="h-full min-h-screen w-full"
      >
        <div className="h-screen w-full py-[var(--py)] pl-32 pr-[var(--px)] font-serif text-8xl font-bold">
          About
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
