import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
const Card = ({ icon, title, subtitle }) => (
  <div className="flex flex-col max-w-xs min-h-[15.625rem] justify-start p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-14 h-14 rounded-md flex items-center justify-center bg-black">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
    </div>
  </div>
);

const Section2 = () => {
  return (
    <div className="w-full grotesk my-[20px] ">
      <div className="w-full text-white text-4xl font-bold flex justify-center">
        Key Features:
      </div>
      <div className="flex flex-wrap w-screen my-[20px] gap-[26px] grotesk justify-center items-center">
        <Card
          icon={<FaCarSide fontSize={21} className="text-white" />}
          title="Customization Options:"
          subtitle="Customization options, allowing users to define tokenomics, features, and other parameters to align with their project goals."
        />
        <Card
          icon={<FaCarSide fontSize={21} className="text-white" />}
          title="Security Assurance:"
          subtitle="Security is paramount in the crypto world. Devslab implements robust security measures to safeguard your token deployment process."
        />
        <Card
          icon={<FaCarSide fontSize={21} className="text-white" />}
          title="Comprehensive Support:"
          subtitle="Launching a token can be a complex endeavor. Devslab provides support, offering documentation, tutorials, and responsive customer service."
        />
        {/* <Card
          icon={<FaCarSide fontSize={21} className="text-white" />}
          title="Tesla Model Y:"
          subtitle="The Model Y features optional third-row seating and has quickly gained popularity in the growing electric SUV market."
        /> */}
      </div>
    </div>
  );
};
export default Section2;
