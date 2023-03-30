import { bg, arrowUp } from "../assets";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 border-b-[1px] border-black object-contain">
      <div className="flex flex-col">
        <div>
          <h1 className="font-bold text-[72px]">
            Hi! I'am <span className="m-[10px] bg-orange-400 text-[32px] px-[26px] py-[12px] rounded-full">UX/UI Developer</span><br />
            <span>Sanidhya Chaudhay</span>
          </h1>
          <p className="text-[18px] mt-[10px]">
            Has an experience in designing <br /> user interface of {" "}
            <span className=" font-medium">2 Months</span>
          </p>
        </div>
        <div className="mt-[40px] mb-[50px] flex justify-start items-center h-[120px]">
          <button className=" bg-orange-600 text-white font-medium text-[18p]  px-[18px] py-[10px]">
            Hire Me{" "}
          </button>
          <button className="font-medium text-[18px] ml-[60px]  px-[12px] py-[4px] border-[4px]">
            Projects <img src={arrowUp} alt="" className="w-[20px] " />
          </button>
        </div>
        <div className="bg-gray-800 h-[250px] flex justify-center items-center">
          <div className="flex">
            <div>
              <h1 className="text-[22px] text-white font-medium">
                Projects <br /> Stastistics 2023
              </h1>
              <button className=" bg-orange-600 text-black font-medium text-[14px] px-[10px] py-[6px] mt-[10px]">
                Know More{" "}
              </button>
            </div>
            <div className="ml-[30px] grid grid-rows-3">
              <div className="flex text-white font-medium text-[16px] border-b-[1px] border-black">
                <h1 className="mr-[20px] mt-[10px]">Websites Designs</h1> <span className="mt-[11px]">06</span>
              </div>
              <div className="flex text-white font-medium text-[16px] border-b-[1px] border-black">
                <h1 className="mr-[20px] mt-[10px]">Mobile App Design</h1> <span className="mt-[11px]">32</span>
              </div>
              <div className="flex text-white font-medium text-[16px] border-b-[1px] border-black">
                <h1 className="mr-[20px] mt-[10px]">Brand Identity</h1> <span className="mt-[11px]">56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={bg} alt="my img" className="h-full" />
    </section>
  );
};

export default Hero;
