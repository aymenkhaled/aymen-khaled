const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-white/10 bg-white/5 text-cyan rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:text-orange">
      <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer" aria-label="social link">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
