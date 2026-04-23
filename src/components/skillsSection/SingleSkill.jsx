const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-4 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white/5 text-cyan h-[96px] w-[96px] flex items-center justify-center rounded-3xl hover:text-orange hover:scale-105 transform transition-all duration-500 text-5xl border border-white/10 shadow-xl backdrop-blur">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[96px] h-[80px] bg-cyan/10 absolute top-[50px] -z-10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default SingleSkill;
