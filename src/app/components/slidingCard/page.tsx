"use client";
import React from "react";
import Image from "next/image";
import mainCard from "../../../../public/images/mainCard.png";
import jointAccount from "../../../../public/images/jointAccountImg.jpg";
import kidoaccount from "../../../../public/images/kidoaccount.jpg";
import billsImage from "../../../../public/images/billsImage.jpg";
import japanImg from "../../../../public/images/japanImg.jpg";
import Slider from 'react-slick';
import {useState, useEffect} from "react";
import { motion } from 'framer-motion';

const imageItems = [
  { src: mainCard, width: 208, height: 294 },
  { src: jointAccount, width: 208, height: 294 },
  { src: kidoaccount, width: 208, height: 294 },
  { src: billsImage, width: 208, height: 294 },
  { src: japanImg, width: 208, height: 294 },
];
 const page = ({ title = <></>, subtitle = <></> }) => {

  const [imageIndex, setImageIndex] = useState(0)
  const [showSlides, setShowSlides] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);


  const showSlideSection = () => {
    if (window.scrollY >= 1) {
      setShowSlides(true);
      setTimeout(() => {
        setIsHidden(true); // Restore brightness after a delay
      }, 600); 
    } else {
      setShowSlides(false);
      setIsHidden(false)
    }
  };

  
  useEffect(() => {
    window.addEventListener('scroll', showSlideSection);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', showSlideSection);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const [showDiv, setShowDiv] = useState(false);

  
  useEffect(() => {

    if (showSlides) {
      setImageIndex(0)
      setTimeout(() => {
        setShowDiv(true);
       
      }, 500);
    }
  }, [showSlides]);


const settings = {
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: 0,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    cssEase: "linear",
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
    responsive:[
      {
        breakpoint:640,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          centerMode: false,
        },
      },
      {
        breakpoint:430,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className={`bg-bg bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] bg-transparent relative`}>
    <div className={`h-[60vh] pt-24 pl-[14.375rem] z-30 relative ${showSlides ? 'transition-all duration-500 transform -translate-y-full' : ''} ${
          isHidden && showSlides ? 'hidden' : ''
        }`}>
      <h1 className='text-[5.8rem] capitalize text-white font-black w-[70vw] font-aeonik '>CHANGE THE WAY YOU MONEY</h1>
      <p className='text-lg font-aeonik font-normal text-white leading-6  px-2'>For those who want more from their money — <br/>there’s Revolut. Sign up for free, in a tap.</p>
      <button className='bg-[#191C1F] w-[8.25rem] h-[2.6rem] font-medium text-white rounded-full cursor-pointer mt-[10px] mx-2'>Get the app</button>
    </div>
    <motion.div
    className={`w-[100vw] flex justify-center  absolute bottom-0 ${
      isHidden && showSlides ? 'hidden' : ''
    }`}
    animate={{
      scale: showSlides ? [1, 0.5] : 1,
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      times: [0, 1],
     
    }}
  >

      <div className='bg-girl bg-transparent bg-center bg-no-repeat bg-cover  w-[800px] h-[800px]  absolute bottom-0'/>
      <img className="w-[340px] h-[480px] mx-auto absolute bottom-5 border-2 border-[#cacdcf] rounded-[calc(2.5vh)]" src="/images/main.png"/>

    </motion.div>
    {(showDiv && showSlides) && (  
         <motion.div
 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
  
      transition={{
        duration: 2,
        ease: "easeInOut",

      }}
    
 >
     
    <div className="bg-white w-[100vw] h-[100vh] pt-[5rem] flex flex-col items-center rounded z-50">
    <div className="sapce-y-2 w-[66rem]">
      <h2 className="font-aeonik text-[3.5rem] font-black leading-[3.5rem] uppercase text-center">Make your spend, well-spent</h2>
      <div className="px-[13.5rem]">
        <p className="text-[#191C1F] text-lg leading-6 my-[1rem] text-center">Grabbing a coffee? Add some cashback. When in Japan? Spend in Yen. Big life change? Try a Joint Account. However you spend — Revolut is all you need.</p>
        <p className="text-[#191C1F] text-xs font-normal leading-[1.125rem] text-center">Shops cashback promotions vary. Joint Account T&Cs apply.</p>
        </div>  
      </div>
  
    <div className="max-w-[700px] mx-auto my-[4rem]">
          <div
            className=""
          >
            <Slider {...settings}>
              {imageItems.map((image, index) => (
                <div
                
              className={`transform ${index === imageIndex ? "scale-100" : "scale-90"} transition-transform duration-350 ease-in-out`}
                  key={index}
                >
                  
                  <div className="rounded-[5px] shadow-4xl  w-[208px] h-[294px]  m-auto">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      priority={true}
                      alt=""
                      className={`sm:max-lg:h-auto sm:max-lg:w-auto mx-auto rounded-[15px]`}
                      />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        </div>

  </motion.div>
    )}
        </div>
  );
};
export default page;