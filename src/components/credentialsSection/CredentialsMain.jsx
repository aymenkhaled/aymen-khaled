import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const education = [
  {
    title: "BSc Big Data & Analytics",
    place: "ISIMS Sfax",
    date: "2022 - 2025",
  },
  {
    title: "Software Engineering Diploma",
    place: "ESPS",
    date: "2022",
  },
];

const certifications = [
  "JavaScript Algorithms - freeCodeCamp",
  "Responsive Web Design - freeCodeCamp",
  "Young Entrepreneur Rookies",
];

const CredentialsMain = () => {
  return (
    <section id="credentials" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="text-center"
      >
        <h2 className="text-6xl text-cyan mb-10">Education</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Academic background and certifications that support my engineering work across data,
          software systems, frontend development, and product delivery.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="border border-white/10 bg-white/[0.04] rounded-3xl p-6 shadow-xl backdrop-blur"
        >
          <h3 className="text-2xl text-orange mb-6">Education</h3>
          <div className="flex flex-col gap-5">
            {education.map((item) => (
              <div key={item.title}>
                <p className="font-bold text-cyan">{item.title}</p>
                <p className="text-lightGrey">{item.place}</p>
                <p className="text-sm text-lightBrown">{item.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="border border-white/10 bg-white/[0.04] rounded-3xl p-6 shadow-xl backdrop-blur"
        >
          <h3 className="text-2xl text-orange mb-6">Certifications</h3>
          <ul className="list-disc pl-5 text-lightGrey leading-relaxed">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsMain;
