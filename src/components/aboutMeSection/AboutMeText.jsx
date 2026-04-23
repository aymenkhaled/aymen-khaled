import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am Aymen, a Full Stack Web and Mobile Developer specialized in SaaS and AI integrations.
        I have shipped production tools used by real teams, including a multi-tenant AI strategy platform,
        an AI assistant suite, and a sales meeting automation product.
      </p>
      <p className="mt-4">
        I work across frontend, backend, and automation pipelines: React and Next.js on the frontend,
        Node.js, FastAPI, and Django on the backend, plus OpenAI and Groq integrations.
        My focus is clean architecture, measurable outcomes, and systems that scale beyond demo stage.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
