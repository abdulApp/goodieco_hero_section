import React from "react";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <div className="bg-black w-[390px] h-[631px]">
      <div
        class="bg-[image:var(--image-url)] relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-full"
        style={{
          "--image-url": `url(${heroBg})`,
          "background-color": "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ "background-color": "rgba(0, 0, 0, 0.4)" }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[30px] bg-yellow-300">
            <div className="flex justify-center items-center pt-1">
              <p className=" text-sm font-normal text-center">
                FREE SHIPPING ON ORDERS $250+{" "}
                <span className=" font-semibold underline">SHOP NOW</span>
              </p>
            </div>
          </div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[390px] h-[50px]">
            <div className="flex justify-between items-center h-full px-4">
              <h1 className=" text-xl font-bold text-center tracking-widest">GOODIECO</h1>
              <span className=" font-semibold">icon</span>
            </div>
          </div>

          <div className="absolute top-[9rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[353px] pt-6">
            <p className="text-white text-sm font-bold">
              🌟🌟🌟🌟🌟 TRUSTED BY 104,290+ CUSTOMERS
            </p>
            <h1 className="text-white text-3xl font-normal pt-4 font-serif">
              Luxury Skincare for Radiant, Healthy-Looking Skin
            </h1>
          </div>
          <div className="absolute bottom-[2rem] left-1/2 transform -translate-x-1/2 py-2 w-[353px] h-[60px] bg-[#312E3F] rounded-full">
            <h1 className="text-white text-[19px] font-normal">
              Transform Your Skin Today
            </h1>
            <p className="text-white text-sm font-semibold">30-day money back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
