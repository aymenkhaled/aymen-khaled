import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full border-2 border-orange border-dashed rounded-2xl p-4 h-full"
    >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-sm leading-relaxed">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index} className="mb-1">{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
