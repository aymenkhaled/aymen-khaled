import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Web Developer",
    company: "Everything to Gain",
    date: "Feb 2025 - Present",
    responsibilities: [
      "Led Strategy Navigator, JourneyAI, and SaleSide AI delivery as live SaaS products.",
      "Integrated 65+ AI tools (GPT-4o, Groq Llama) with Stripe and PayPal billing.",
      "Built Slack, Asana, and Basecamp integrations with real-time WebSocket features.",
    ],
  },
  {
    job: "Full Stack Developer (Intern)",
    company: "Aziin Engineering Solution",
    date: "2024",
    responsibilities: [
      "Developed an e-learning platform with AI chatbot support and real-time WebSockets.",
      "Built MERN backend modules for content, authentication, and performance optimization.",
      "Delivered end-to-end feature workflows from frontend to API integration.",
    ],
  },
  {
    job: "Mobile Developer (Intern)",
    company: "SAC Marquage",
    date: "Sep 2024 - Oct 2024",
    responsibilities: [
      "Built React Native RFID mobile app with IoT device communication.",
      "Created Django REST APIs for tag management and synchronization.",
      "Implemented reliable real-time data handling for field workflows.",
    ],
  },
  {
    job: "Full Stack Web Developer (Intern)",
    company: "Proged",
    date: "Jul 2022 - Aug 2022",
    responsibilities: [
      "Developed e-commerce system with .NET, React, SQL Server, and MongoDB.",
      "Implemented payment, catalog, and order workflows.",
      "Contributed to deployment and maintenance of production web modules.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-4">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SingleExperience experience={experience} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllExperiences;
