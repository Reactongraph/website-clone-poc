"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

let items = [
  {
    heading: "YOU CALL THE STOCKS",
    textContent: `From Apple to Tesla, choose from 2,000+ stocks, and own a slice of  \n some of the most popular companies on the planet.¹`,
    innerTextContent: "Capital at risk. T&Cs apply.",
    buttonContent: "Explore Stocks",
    buttons: "Stocks",
    video: "/videos/stocks.mp4",
    videoMobileView: "/videos/stocks-mobileview.mp4"

 },
  {
    heading: "MINE FOR MENTAL",
    textContent: "Explore the different commodities we offer: gold, silver... you name it.²",
    innerTextContent: "Capital at risk. Not FCA regulated or protected.",
    buttonContent: "Explore Commodities",
    buttons: "Commodities",
    video: "/videos/commodities.mp4",
    videoMobileView: "/videos/commodities-mobileview.mp4"
  }
];




const page = () => {

  const [currentvideoIndex, setCurrentvideoIndex] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);



  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedButtonIndex === null) {
      setCurrentvideoIndex((prevIndex) => (prevIndex + 1) % items.length);
     }
    }, 7000);
      return () => clearInterval(interval);
  }, [selectedButtonIndex, currentvideoIndex]);


  const heading = items[currentvideoIndex].heading;
  const textContent = items[currentvideoIndex].textContent;
  const buttonContent = items[currentvideoIndex].buttonContent;
  const innerTextContent = items[currentvideoIndex].innerTextContent;



  const handleButtonClick = (index: any) => {
    setSelectedButtonIndex(index);
    setCurrentvideoIndex(index)
  };

 return (
    <div className={`relative w-screen md:h-screen z-50 py-[4rem] flex justify-center items-center flex-col mx-auto gap-x-8  gap-y-8`}>
        
      <div className="w-screen md:w-[62.5rem] px-4 h-fit sm:h-[14.5rem] max-md:text-left  flex flex-col gap-y-6 z-30 md:justify-center md:items-center text-center transition-all duration-300 ease-in-out">
        
        <h2 className="font-aeonik text-black text-[clamp(2.25rem,5vw,3rem)] md:leading-[3.5rem] font-black uppercase md:tracking-[-0.6px]">
          {heading}
        </h2>
        <span className="font-aeonik text-black text-lg font-normal leading-[1.5rem]">
        {textContent.split('\n').map((line, index) => (
        <React.Fragment key={index}>
        <p>{line}</p>
        {/* {index < textContent.split('\n').length - 1 && <br />} */}
         </React.Fragment>
         ))}
        {/* <br/> */}
        {innerTextContent}
        </span>

        <button className="font-aeonik bg-black w-fit h-[2.6rem] font-medium text-[#f4f4f4] rounded-full cursor-pointer px-[1.4rem] py-[0.625rem] text-base leading-[1.3rem]">
          {buttonContent}
        </button>
       </div>
        <div className="w-[62.5rem] flex flex-col justify-center items-center gap-y-5">
          
          <div className="  flex justify-center items-center max-md:hidden">
        {items.map(
        (videoData, index) =>
            currentvideoIndex == index  && (
            <video autoPlay muted key={index} width="475" height="287" controls={false}>
              <source src={videoData.video} type="video/mp4" />
             </video>
            )
              )}
              </div>
         
              <div className="  flex justify-center items-center md:hidden">
        {items.map(
        (videoData, index) =>
            currentvideoIndex == index  && (
            <video autoPlay muted key={index} width="475" height="287" controls={false}>
              <source src={videoData.videoMobileView} type="video/mp4" />
             </video>
            )
              )}
              </div>

        <div className="flex flex-row gap-x-2">
          {items.map((image, index) => (
            <button  key={index} className={`font-aeonik  ${
             ( selectedButtonIndex !== null && selectedButtonIndex === index) ||
             currentvideoIndex === index
                ? `bg-black text-white ${(selectedButtonIndex === null) ? "btn" : ""} overflow-hidden z-50 relative`
                : `bg-white bg-opacity-20 text-black`
          } h-[2.6rem] font-medium  rounded-full cursor-pointer px-[1.5rem] py-[0.625rem] text-base leading-[1.3rem] border-2 border-black my-4`}
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
