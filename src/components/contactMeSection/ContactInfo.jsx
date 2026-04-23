import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="khaledaymen850@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+216 26286045" Image={FiPhone} />
      <SingleInfo text="Sfax, Tunisia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
