import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-body min-h-fit border-y-1 box-border p-6 lg:p-12 bg-[radial-gradient(#ccc_1px,_transparent_1px)] dark:bg-[radial-gradient(#444_1px,_transparent_1px)] [background-size:20px_20px] animate-dots"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-4"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold mb-2 sm:text-5xl text-style"
          >
            Skills
          </motion.h3>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:text-xl block"
          >
            <span className="text-[#347433]">Tools </span>
            <span className="text-[#FFC107]">and</span>{" "}
            <span className="text-[#B22222]">Technologies</span>
          </motion.span>
        </div>

        {/* Skills Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 },
            },
          }}
          viewport={{ once: true }}
          className="flex gap-6 sm:gap-10 flex-wrap justify-center"
        >
          {[
            "html",
            "css",
            "java-script",
            "react",
            "vite",
            "Tailwindcss",
            "bootstrap",
            "php",
            "mysql",
            "Vscode",
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-15 sm:w-20"
            >
              <img src={`/public/images/${tech}.png`} alt={tech} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
