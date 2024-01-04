"use client";
import React from "react";
import Image from "next/image";
import mainCard from "../../../../public/images/mainCard.png";
import jointAccount from "../../../../public/images/jointAccountImg.jpg";
import kidoaccount from "../../../../public/images/kidoaccount.jpg";
import billsImage from "../../../../public/images/billsImage.jpg";
import japanImg from "../../../../public/images/japanImg.jpg";
import Slider from 'react-slick';
import {useState} from "react";




const imageItems = [
  { src: mainCard, width: 208, height: 294 },
  { src: jointAccount, width: 208, height: 294 },
  { src: kidoaccount, width: 208, height: 294 },
  { src: billsImage, width: 208, height: 294 },
  { src: japanImg, width: 208, height: 294 },
];
 const page = ({ title = <></>, subtitle = <></> }) => {

  const [imageIndex, setImageIndex] = useState(0)

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
    <div className="bg-white w-[100vw] h-[102vh] pt-[5rem] flex flex-col items-center">
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
                
              className={`transform scale-${index === imageIndex ? "100" : "90"} transition-transform duration-350 ease-in-out`}
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
  );
};

export default page;