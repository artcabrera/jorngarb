import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      key="index"
      exit={{ y: "-100vh" }}
      className="relative h-full w-full overflow-hidden"
    >
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: "100vh" }}
        exit={{ height: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0, 1, 1, 0],
        }}
        className="absolute top-0 left-0 z-[111] h-fit w-full bg-[#F4B393]"
      >
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: 0 }}
          transition={{ delay: 0.9 }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7 }}
        className="relative h-full min-h-screen w-full"
      >
        <div className="relative z-10 flex h-screen w-full py-[var(--py)] pl-16 pr-[var(--px)] max-md:pt-32 md:items-center md:pl-32">
          <div className="w-full max-w-2xl space-y-4 md:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-serif text-[17vw] font-bold leading-[1em] md:text-[16vw] lg:text-[14vw]"
            >
              Hello<span className="text-[#FF7F11]">.</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-serif text-[24px] font-semibold leading-[1.25em] text-[#FF7F11] lg:text-[36px]"
            >
              I&apos;m{" "}
              <span className="font-bold text-[#3C0000]">Jorn Blaedel</span>. A
              web developer, crafter, and problem solver.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              I build things for the web. I enjoy improving my skills and never
              says no to a challenge.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex"
            >
              <Link
                to="/projects"
                className="block transform select-none rounded-full bg-[#3C0000] px-6 py-3 font-serif text-white transition-all duration-500 ease-in-out hover:tracking-widest md:px-8 md:py-4 md:text-xl"
              >
                View my works
              </Link>
            </motion.div>
          </div>
          <div className="absolute right-0 -z-10 translate-x-[80%] translate-y-[25%] scale-[2] select-none mix-blend-difference md:translate-x-[50%] md:translate-y-[30vh] md:scale-100">
            <img
              draggable="false"
              src="/assets/images/hero.svg"
              className="h-fit w-[400rem] rotate-12 -scale-x-1 object-cover md:w-[80rem]"
            />
          </div>
        </div>
        <div className="h-screen w-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
