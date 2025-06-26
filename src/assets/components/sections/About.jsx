import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-body min-h-screen flex relative px-6 pb-6 pt-10 lg:px-12 lg:pb-1 lg:pt-20"
    >
      <div className="mx-auto">
        {/* Mobile Headings */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="sm:hidden text-xl"
        >
          ABOUT
        </motion.h2>

        <motion.span
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="sm:hidden text-3xl font-bold text-style block"
        >
          Get <span className="text-[#347433]">to</span>{" "}
          <span className="text-[#FFC107]">know</span>{" "}
          <span className="text-[#B22222]">me</span>
        </motion.span>

        <div className="sm:flex gap-4">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="p-1 h-9/10">
              <img
                src="/public/images/myimage.jpg"
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden sm:flex text-2xl"
            >
              ABOUT
            </motion.h2>

            <motion.span
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hidden sm:flex gap-2 text-5xl font-semibold text-style lg:mt-2"
            >
              Get <span className="text-[#347433] text-style">to </span>
              <span className="text-[#FFC107] text-style">know </span>
              <span className="text-[#B22222] text-style"> me</span>
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-lg text-secondary lg:mt-4"
            >
              Hi, I'm Siegrid, an aspiring web developer passionate about
              creating visually appealing, user-friendly websites. I love
              turning ideas into interactive designs that are functional and
              engaging. With a focus on clean code and modern design, I strive
              to craft impactful digital experiences while continuously learning
              new tools and technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <strong>Hobbies:</strong> Playing online games | Watching
              movies/series
            </motion.p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t box-border mt-4 lg:mt-10"
            >
              <h3 className="font-extrabold my-2 text-xl lg:my-6">EDUCATION</h3>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {/* Item 1 */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(to_right,_#347433,_#FFC107)] text-end p-1 rounded"
                >
                  <div className="font-semibold text-xs sm:text-base bg-body w-full h-full rounded p-1 sm:p-2">
                    PNP AVIATION 8 - INTERNSHIP (2024)
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(to_right,_#FF6F3C,_#B22222)] col-span-2 p-1 rounded"
                >
                  <div className="bg-body w-full h-full p-1 sm:p-2">
                    <span className="font-semibold text-xs sm:text-base">
                      DEVELOPER
                    </span>
                    <p className="text-xs sm:text-sm">
                      Developed software solutions for the Department.
                    </p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(to_right,_#347433,_#FFC107)] text-end p-1 rounded"
                >
                  <div className="font-semibold text-xs sm:text-base bg-body w-full h-full rounded p-1 sm:p-2">
                    AMA UNIVERSITY (2021-2025)
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(to_right,_#FF6F3C,_#B22222)] col-span-2 p-1 rounded"
                >
                  <div className="bg-body w-full h-full p-1 sm:p-2">
                    <span className="font-semibold text-xs sm:text-base">
                      BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                    </span>
                    <p className="text-xs sm:text-sm">
                      Exhibited consistent excellence in academic performance.
                    </p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(to_right,_#347433,_#FFC107)] text-end p-1 rounded"
                >
                  <div className="font-semibold text-xs sm:text-base bg-body w-full h-full rounded p-1 sm:p-2">
                    DOLORES NATIONAL HIGH SCHOOL (2015-2021)
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="bg-[linear-gradient(to_right,_#FF6F3C,_#B22222)] col-span-2 p-1 rounded"
                >
                  <div className="bg-body w-full h-full p-1 sm:p-2">
                    <span className="font-semibold text-xs sm:text-base">
                      TVL-ICT
                    </span>
                    <p className="text-xs sm:text-sm">
                      Consistently achieved good academic performance.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
