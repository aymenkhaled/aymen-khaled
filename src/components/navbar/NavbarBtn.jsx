import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
    href="/Aymen_Khaled_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 rounded-full text-lg font-bold font-body text-black border-orange border flex items-center gap-1 bg-orange transition-all duration-300 hover:-translate-y-0.5 hover:bg-lightOrange cursor-pointer"
  >
    View CV
    <div className="sm:hidden md:block">
      <LuArrowDownRight />
    </div>
  </a>
  
  
  );
};

export default NavbarBtn;
