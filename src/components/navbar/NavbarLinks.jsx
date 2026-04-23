import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex md:flex-row sm:flex-col gap-6 text-white font-body md:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] md:text-md sm:text-xl sm:bg-black md:bg-transparent sm:w-full sm:border sm:border-orange sm:rounded-2xl sm:shadow-lg md:border-none md:rounded-none md:shadow-none py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
