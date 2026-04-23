const ExperienceTopRight = () => {
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">
        I specialize in{" "}
        <span className="font-bold text-white">
          SaaS architecture and AI integrations
        </span>
        , building multi-tenant platforms with RBAC, real-time WebSockets and
        billing systems. <br />
        My stack spans{" "}
        <span className="font-bold text-white">
          React, Node.js, FastAPI and Python
        </span>
        , with hands-on experience integrating{" "}
        <span className="font-bold text-white">
          OpenAI and Groq
        </span>{" "}
        into production products.
      </p>
    </div>
  );
};

export default ExperienceTopRight;
