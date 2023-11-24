import { logo, pepe1 } from "../assets";

const Section4 = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-cebter items-center">
          <h1 className="font-bold text-center sm:text-center sm:text-6xl text-3xl">
            Join the Devslab community
          </h1>
          <p className="sm:text-2xl sm:text-center text-center text-lg font-medium text-[#EBEBF599]">
            Embark on your token deployment journey with Devslab and experience{" "}
            <br />
            the future of streamlined, efficient, and secure token creation.
          </p>
          <div>
            <a href="https://t.me/DevsLab_Portal">
              <button className=" border-[#fff] mb-5">Join Telegram</button>
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={pepe1} alt="logo" width={350} />
        </div> */}
      </div>
    </div>
  );
};
export default Section4;
