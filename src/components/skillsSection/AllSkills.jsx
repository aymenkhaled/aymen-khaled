import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNodedotjs,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiFastapi,
  SiOpenai,
  SiHubspot,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "React Native", icon: TbBrandReactNative },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "NodeJS", icon: SiNodedotjs },
  { skill: "Python", icon: FaPython },
  { skill: "FastAPI", icon: SiFastapi },
  { skill: "Django", icon: SiDjango },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "OpenAI", icon: SiOpenai },
  { skill: "HubSpot", icon: SiHubspot },
  { skill: "Docker", icon: FaDocker },
  { skill: "Git", icon: FaGitAlt },
];

const AllSkills = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
