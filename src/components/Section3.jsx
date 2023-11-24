import { logo, pepe2 } from "../assets";

const Section3 = () => {
  return (
    <>
      <div className="w-full grotesk flex justify-center md:pt-[30px]">
        <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
          <div className="flex flex-col gap-3 sm:items-center items-center">
            <h1 className="font-bold text-center sm:text-center sm:text-6xl text-3xl">
              Tailor your token to meet your project's unique requirements.
            </h1>

            <p className="sm:text-2xl sm:text-center text-center text-lg font-medium text-[#ebebf5ad]">
              Devslab offers a range of customization options.
            </p>
            <div>
              <a href="https://t.me/DevsLab_Portal">
                <button className="border-[#fff] mb-5">Early Access</button>
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
            <img
              src={pepe2}
              alt="logo"
              width={350}
            />
          </div> */}
        </div>
      </div>
      {/* <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/5JRf0TwraEE?si=p419izYwBrNno_Gx&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/UwsrzCVZAb8?si=o_6IZq_irXigA7yY&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </>
  );
};
export default Section3;
