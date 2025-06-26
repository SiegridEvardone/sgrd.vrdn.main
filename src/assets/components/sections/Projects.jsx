import { motion } from "framer-motion";
import { ProjectCard } from "../ProjectCard";

const projectList = [
  {
    title: "Boarding House Management System",
    description: "A web-based capstone project with PayPal payment.",
    image: "/images/project1.png",
    techs: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    link: "#",
  },
  {
    title: "My First Personal Website",
    description: "A personal website that contains my information.",
    image: "/images/project3.png",
    techs: ["HTML", "CSS", "BOOTSTRAP", "JavaScript"],
    link: "https://siegridevardone.github.io/sgrd.vrdn/",
  },
  {
    title: "KRSH Landing Page",
    description:
      "A landing page for Kalye Roxas Shawarma House a famous restaurant in Dolores Eastern Samar",
    image: "/images/project2.png",
    techs: ["HTML", "CSS", "BOOTSTRAP", "JavaScript"],
    link: "https://siegridevardone.github.io/KRSH-Landing-Page/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-body min-h-screen flex flex-col relative px-6 p-6 pt-10 lg:px-12 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl">PROJECTS</h3>
        <div className="relative inline-block">
          <span className="relative font-semibold text-3xl lg:text-5xl text-style z-1">
            Check out my works
          </span>
          <svg
            className="absolute top-8 right-0 w-20 h-3 z-0 lg:top-11 lg:w-30"
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="#347433"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="3"
              x2="100"
              y2="3"
              stroke="#FFC107"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="5"
              x2="100"
              y2="5"
              stroke="#B22222"
              strokeWidth="1"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-6 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
