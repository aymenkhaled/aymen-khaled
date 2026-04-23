import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({
  name,
  year,
  align,
  image,
  liveDemo,
  github,
  role,
  impact,
  visibility,
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="space-y-2">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <p className="text-sm text-lightGrey">
          <span className="text-cyan font-semibold">Role:</span> {role}
        </p>
        <p className="text-sm text-lightGrey">
          <span className="text-cyan font-semibold">Impact:</span> {impact}
        </p>
        <p className="text-xs text-lightBrown uppercase tracking-wide">{visibility}</p>

        <div
          className={`flex gap-6 text-lg mt-2 ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            >
              Live Demo <BsFillArrowUpRightCircleFill />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            >
              GitHub <BsGithub />
            </a>
          )}
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden" />
        <img src={image} alt={`${name} screenshot`} className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
