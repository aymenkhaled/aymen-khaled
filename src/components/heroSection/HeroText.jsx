import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-6 md:text-left sm:text-center">
      <motion.div
        variants={fadeIn("down", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-cyan sm:mx-auto md:mx-0"
      >
        5+ years / Remote-ready / Sfax, Tunisia
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Full-Stack AI/SaaS Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[3.2rem] lg:text-7xl sm:text-4xl text-white font-bold leading-[0.95]"
      >
        Aymen Khaled
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-2xl text-lg leading-relaxed text-lightGrey"
      >
        I build production SaaS platforms, AI integrations, automation systems, and full-stack web/mobile apps with React, Next.js, Node.js, Python, FastAPI, Django, OpenAI, Groq, and WebSockets.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.65)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="grid max-w-2xl grid-cols-2 gap-3 text-sm text-lightGrey md:grid-cols-4"
      >
        {[
          "65+ AI tools",
          "10+ assistants",
          "40+ platforms scraped",
          "15+ projects",
        ].map((item) => (
          <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center font-semibold">
            {item}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-3 sm:justify-center md:justify-start"
      >
        <a href="/Aymen_Khaled_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-orange px-5 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-lightOrange">
          Download CV <LuArrowDownRight />
        </a>
        <a href="#projects" className="rounded-full border border-cyan px-5 py-3 font-bold text-cyan transition-all duration-300 hover:-translate-y-1 hover:bg-cyan hover:text-black">
          View Projects
        </a>
        <a href="https://www.linkedin.com/in/aymen-khaled-652724236/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white transition-all duration-300 hover:border-cyan hover:text-cyan">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/aymenkhaled" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white transition-all duration-300 hover:border-cyan hover:text-cyan">
          <FaGithub /> GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
