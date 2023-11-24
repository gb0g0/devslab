import { logo } from "../assets";

const Hero = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            Devslab: $DEV
            <br />
            Token - Empowering
            <br />
            Deployments
          </h1>
          <p className="sm:text-base sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
            At the heart of our initiative is the $DEV token,
            <br className="sm:block hidden" />
            symbolizing the key to unlocking a seamless and
            <br className="sm:block hidden" />
            efficient token creation experience.
            {/* 
In a world where emotions were traded like currency, There was a unique crypto token known as "Depressed."

*/}
          </p>
          <a
            // href="https://etherscan.io/token/0x69fd3519f47d3e8314a566cb45e99bb437d2593c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="sm:text-lg sm:text-left text-center underline text-[12px] font-normal text-[#EBEBF599]">
              CA:
            </p>
          </a>
          <div>
            <a
              // href="https://app.uniswap.org/swap?outputCurrency=0x7075d664494877edf4902e41ac94fdf2f6a5338e&chain=ethereum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" border-[#fff] mb-5">Buy $DEV Now</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={logo} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
//https://link.bitpay.com/i/W5M73vVNnHzvrYwNvPLKhw
