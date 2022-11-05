import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div key="contact" className="relative h-full w-full overflow-hidden">
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
        exit={{ opacity: 0 }}
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

export default Contact;
