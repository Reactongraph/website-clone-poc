"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const items = [
  {
    heading: "Simply hit send",
    textContent: "Sending and receiving money is just as easy as texting a friend.",
    buttons: "Send",
    video: "/videos/send.mp4"
    },
  {
    heading: "Split that damn bill",
    textContent: "Be the group dinner hero — grab the bill and settle up faster than it takes to down your drink.",
    buttons: "Spilt",
    video: "/videos/split.mp4"
  },
  {
    heading: "Be the best gift-er",
    textContent: "Send them something they'll actually use — a fun gift card or good old cash. And it only takes a few seconds.",
    buttons: "Gift",
    video: "/videos/gift.mp4"
  },
];

const page = () => {

  const [currentvideoIndex, setCurrentvideoIndex] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);


  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedButtonIndex === null) {
      setCurrentvideoIndex((prevIndex) => (prevIndex + 1) % items.length);
     }
    }, 2000);
      return () => clearInterval(interval);
  }, [selectedButtonIndex, currentvideoIndex]);

  const heading = items[currentvideoIndex].heading;
  const textContent = items[currentvideoIndex].textContent;
  const video1 = items[currentvideoIndex].video;


  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
    setCurrentvideoIndex(index)
  };

 return (
    <div className={`relative w-[100vw] h-[100vh] z-50 py-[4rem] flex flex-row mx-auto`}>
      <div className="w-[63rem] flex flex-col gap-y-6 z-30 justify-center items-center">
        <h2 className="font-aeonik text-black text-[3rem] leading-[3.5rem] font-black uppercase tracking-[-0.6px]">
          {heading}
        </h2>
        <span className="font-aeonik text-black text-lg font-normal leading-[1.5rem] px-[13rem] text-center">
        {textContent}
        </span>
        <button className="font-aeonik bg-[#f4f4f4] w-[10.5rem] h-[2.6rem] font-medium text-black rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem]">
          try it out
        </button>
     </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
        <video type="video/mp4" autoPlay muted className="w-[20rem] h-[25rem]" controls>
          <source src={video1}/>
        </video>
        <div className="flex flex-row gap-x-2">
          {items.map((image, index) => (
            <button  key={index} className={`font-aeonik  ${
             ( selectedButtonIndex !== null && selectedButtonIndex === index) ||
             currentvideoIndex === index
                ? "bg-black text-white"
                : `bg-white bg-opacity-20 text-black`
          } h-[2.6rem] font-medium  rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem] border-2 border-black`}
            onClick={() => handleButtonClick(index)}>
              {image.buttons}
            </button>
          ))}
        </div>
       </div>
    </div>
  );
};
export default page;
