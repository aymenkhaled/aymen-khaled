import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ project, index }) => {
  return (
    <motion.article
      variants={fadeIn("up", `0.${index % 4}`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan/50"
    >
      <div className="relative aspect-video overflow-hidden bg-lightBrown">
        <img src={project.image} alt={`${project.name} screenshot`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-orange backdrop-blur">
          {project.year}
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-cyan backdrop-blur">
          {project.visibility}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl font-bold leading-tight text-white">{project.name}</h3>
        <p className="mt-2 text-sm font-semibold text-orange">{project.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-lightGrey">{project.impact}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-lightGrey">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 pt-5 text-sm font-bold">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan transition-all duration-300 hover:text-orange">
              Live <BsFillArrowUpRightCircleFill />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan transition-all duration-300 hover:text-orange">
              GitHub <BsGithub />
            </a>
          )}
          {!project.liveDemo && !project.github && <span className="text-lightGrey">Private work - details available in interview</span>}
        </div>
      </div>
    </motion.article>
  );
};

export default SingleProject;
