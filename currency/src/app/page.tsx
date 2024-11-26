'use client'
import Image from "next/image";
import InputBox from "@/components/InputBox";
import BackgroundImage from "../assets/image.jpg";
import useCurrencyHooks from "@/hooks/useCurrencyHooks";

export default function Home() {
  // const currecnyInfo = 
  useCurrencyHooks("inr");
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        {/* set background images */}
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          // style={{ zIndex: -1 }}
          className="-z-10"
        />

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
            >
              <div className="w-full mb-1">
                <InputBox label="From" className="" />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To" className="" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
