import { motion } from "framer-motion";
import { TypingText } from "../TypingText";

export const Home = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-body min-h-screen flex items-center relative px-6 pt-10 lg:px-12 lg:pb-1 lg:pt-20"
    >
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40 pointer-events-none z-0"></div>

      <div className="mx-auto text-center max-w-5xl space-y-4 z-10">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-1 sm:text-4xl sm:mb-2 md:text-5xl text-style font-semibold"
        >
          Hi, I'm Siegrid
        </motion.h1>

        <motion.span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl text-style block"
        >
          <TypingText words={["A Front-End Developer", "A Programmer", "A Web Developer"]} />
        </motion.span>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs my-4 sm:text-lg text-secondary"
        >
          As a front-end developer, I craft digital experiences that breathe life into creativity, turning visions into vibrant, interactive realities that inspire and connect people across the globe.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex gap-4 items-center justify-center"
        >
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/siegrid-mae-evardone-16473428b/" className="w-8 sm:w-10">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/SiegridEvardone" className="w-8 sm:w-10">
              <img src="/images/github.png" className="bg-white rounded-lg" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/sgrd_vrdn/" className="w-8 sm:w-10">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
          </div>
          <div className="bn40div">
            <a className="bn40 text-color" href="/">Download CV</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
