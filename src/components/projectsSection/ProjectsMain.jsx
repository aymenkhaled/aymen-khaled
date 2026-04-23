import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import projects from "./projectsData";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-4 pt-[110px]">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <SingleProject key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsMain;
