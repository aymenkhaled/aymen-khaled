import { FaJava, FaPhp, FaReact, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiSocketdotio,
  SiFastapi,
  SiDjango,
  SiExpress,
  SiLaravel,
  SiFirebase,
  SiJenkins,
  SiExpo,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "C#", icon: TbBrandCSharp },
  { skill: "PHP", icon: FaPhp },
  { skill: "Java", icon: FaJava },
  { skill: "C++", icon: TbBrandCpp },
  { skill: "ReactJS", icon: FaReact },
  { skill: "React Native", icon: TbBrandReactNative },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: SiNodedotjs },
  { skill: "Express", icon: SiExpress },
  { skill: "Laravel", icon: SiLaravel },
  { skill: "Python", icon: FaPython },
  { skill: "FastAPI", icon: SiFastapi },
  { skill: "Django", icon: SiDjango },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "Firebase", icon: SiFirebase },
  { skill: "OpenAI", icon: SiOpenai },
  { skill: "Groq", icon: () => <span className="text-4xl font-black text-orange">GQ</span> },
  { skill: "WebSocket", icon: SiSocketdotio },
  { skill: "Docker", icon: FaDocker },
  { skill: "Jenkins", icon: SiJenkins },
  { skill: "Expo", icon: SiExpo },
  { skill: "Git", icon: FaGitAlt },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-8 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
