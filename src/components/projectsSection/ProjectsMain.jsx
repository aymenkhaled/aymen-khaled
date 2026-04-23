import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Strategy Navigator - AI SaaS Platform",
    year: "2025",
    align: "right",
    image: "/images/strategy-navigator.png",
    liveDemo: "https://strategynavigator.ai/",
    role: "Full Stack Web Developer",
    impact: "Integrated 65+ AI tools and delivered production RBAC plus billing workflows.",
    visibility: "Public Product",
  },
  {
    name: "JourneyAI - AI Sales Assistant Platform",
    year: "2025",
    align: "left",
    image: "/images/journeyai.png",
    liveDemo: "https://meetjourney.ai/",
    role: "Full Stack Web Developer",
    impact: "Built 10+ assistants with real-time chat, speech workflows, and billing.",
    visibility: "Public Product",
  },
  {
    name: "SaleSide AI - Sales Meeting Assistant",
    year: "2025",
    align: "right",
    image: "/images/saleside.png",
    liveDemo: "https://saleside.ai/",
    role: "Full Stack Web Developer",
    impact: "Automated transcription, summaries, and objection tracking for follow-up consistency.",
    visibility: "Public Product",
  },
  {
    name: "LMS with AI Integration and WebSocket",
    year: "2024",
    align: "left",
    image: "/images/lms.PNG",
    liveDemo: "https://e-learning-five-tau.vercel.app",
    role: "Full Stack Developer (Intern)",
    impact: "Built AI chatbot support and real-time learning interactions.",
    visibility: "Public Demo",
  },
  {
    name: "E-commerce Dashboard",
    year: "2023",
    align: "right",
    image: "/images/dash.PNG",
    liveDemo: "https://dashboard-rho-gray-61.vercel.app/dashboard",
    github: "https://github.com/aymenkhaled/dashboard",
    role: "Full Stack Developer",
    impact: "Centralized analytics, inventory, and order tracking in one interface.",
    visibility: "Public Demo",
  },
  {
    name: "Job Scraper and Outreach Automation",
    year: "2025",
    align: "left",
    image: "/images/website-img-1.jpg",
    role: "Automation and Full Stack Developer",
    impact: "Scraped jobs from 40+ platforms and automated lead enrichment pipelines.",
    visibility: "Private Client Project",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            liveDemo={project.liveDemo}
            github={project.github}
            role={project.role}
            impact={project.impact}
            visibility={project.visibility}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
