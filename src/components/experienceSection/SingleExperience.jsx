import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full border border-white/10 bg-white/[0.04] rounded-3xl p-5 h-full shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50"
    >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange text-lg">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-sm leading-relaxed text-lightGrey">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index} className="mb-1">{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
