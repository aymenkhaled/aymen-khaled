import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex h-full items-center justify-center"
    >
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-cyan/20 via-orange/10 to-transparent blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
        <img
          src="/images/pic.png"
          alt="Aymen Khaled"
          className="max-h-[430px] w-auto rounded-[1.5rem] object-cover"
        />
        <div className="absolute -bottom-5 left-5 rounded-2xl border border-orange/40 bg-black/80 px-4 py-3 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.2em] text-orange">Current focus</p>
          <p className="font-bold text-white">AI SaaS + Automation</p>
        </div>
        <div className="absolute -right-5 top-8 rounded-2xl border border-cyan/40 bg-black/80 px-4 py-3 shadow-xl backdrop-blur sm:hidden md:block">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">Delivery</p>
          <p className="font-bold text-white">Production systems</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
