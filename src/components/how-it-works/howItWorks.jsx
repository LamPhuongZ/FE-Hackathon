import Vector from "../../assets/images/Vector.png";
import how1 from "../../assets/images/how1.png";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <div className="flex flex-col bg-[#FFFDFD]">
        <div className="flex items-center flex-col">
          <h1 className="capitalize text-5xl font-medium">
            quy trình của chúng tôi
          </h1>
          <div className="w-[500px] mt-4">
            <img src={Vector} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full mt-16 px-28">
          <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative">
            <p className="text-9xl font-black text-[#37A3FF] opacity-15 absolute -top-20 -left-11">
              01
            </p>
            <div className="w-[800px] h-56 flex gap-10">
              <div className="w-64 h-52 ">
                <img src={how1} alt="" className="w-full h-full" />
              </div>
              <div className="flex gap-5 justify-center w-[484px] flex-col pb-10">
                <p className="text-[#37A3FF] text-4xl font-bold leading-10">
                  Đăng ký hoặc đăng nhập bằng Gmail
                </p>
                <div className="border-2 border-[#37A3FF] w-20"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative">
              <p className="text-9xl font-black text-[#54BD95] opacity-15 absolute -top-20 -right-11">
                02
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-64 h-52 ">
                  <img src={how1} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[484px] flex-col pb-10">
                  <p className="text-[#54BD95] text-4xl font-bold leading-10">
                    Cập nhập thông tin bản thân
                  </p>
                  <div className="border-2 border-[#54BD95] w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
