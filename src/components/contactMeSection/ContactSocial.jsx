import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { BsCalendar2CheckFill } from "react-icons/bs";
import SingleContactSocial from "./SingleContactSocial";

const socialLinks = [
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/aymen-khaled-652724236/?skipRedirect=true" },
  { icon: FaGithub, link: "https://github.com/aymenkhaled" },
  { icon: FaWhatsapp, link: "https://wa.me/21626286045" },
  { icon: SiUpwork, link: "https://www.upwork.com/freelancers/~01adc11dd1f62fd715" },
  { icon: BsCalendar2CheckFill, link: "https://calendly.com/khaledaymen850" },
];

const ContactSocial = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((item, index) => (
        <SingleContactSocial key={index} Icon={item.icon} link={item.link} />
      ))}
    </div>
  );
};

export default ContactSocial;
