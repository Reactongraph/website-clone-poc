// "use client"
// import React from 'react';
// import Image from "next/image";
// import card from "public/images/card.png";
// import { useState, useEffect } from "react";
// import { motion } from 'framer-motion';

// const Page = () => {
//   const [showSlides, setShowSlides] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);


//   const showSlideSection = () => {
//     if (window.scrollY >= 1) {
//       setShowSlides(true);
//       setIsHidden(true)
//     } else {
//       setShowSlides(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', showSlideSection);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', showSlideSection);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <div className={`bg-bg bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] bg-transparent relative`}>
//       <div className={`h-[60vh] pt-[48px] pl-[230px] z-30 relative ${showSlides ? 'transition-all duration-500 transform -translate-y-full' : ''} ${isHidden ? 'hidden' : ''}`}>
//         <h1 className='text-[6rem] capitalize text-white font-black w-[70vw] font-aeonik'>CHANGE THE WAY YOU MONEY</h1>
//         <p className='text-[18px] font-aeonik font-normal text-white leading-6 '>For those who want more from their money — <br/>there’s Revolut. Sign up for free, in a tap.</p>
//         <button className='bg-[#191C1F] w-[8.25rem] h-[2.6rem] font-medium text-white rounded-full cursor-pointer mt-[10px]'>Get the app</button>
//       </div>
//       <motion.div
//       className='w-[100vw] flex justify-center absolute bottom-0'
//       animate={{
//         scale: showSlides ? [1, 0.5] : 1,
//       }}
//       transition={{
//         duration: 2,
//         ease: "easeInOut",
//         times: [0, 1],
//         // repeat: Infinity,
//         // repeatDelay: 1,
//       }}
//     >
//       {/* <div className='w-[100vw] flex justify-center'> */}
//         <div className='bg-girl bg-transparent bg-center bg-no-repeat bg-cover  w-[800px] h-[800px]  absolute bottom-0'/>
//         <img className="w-[340px] h-[480px] mx-auto absolute bottom-5 border-2 border-[#cacdcf] rounded-[calc(2.5vh)]" src="/images/main.png"/>
//       {/* </div> */}
//       </motion.div>
//     </div>
//   );
// }

// export default Page;

"use client"
import React from 'react';
import Image from "next/image";
import card from "public/images/card.png";
import {useState, useEffect} from "react";

const page = () => {
  const[showSlides, setShowSlides] = useState(false);
  const showSlideSection =()=>{
   if(window.scrollY>= 1){
    setShowSlides(true);
   
}else{
  setShowSlides(false);
 
}
  }
  //  window.addEventListener("scroll",showSlideSection);
  useEffect(() => {
    window.addEventListener('scroll', showSlideSection);
   

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', showSlideSection);
   
    };                                                                                       
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={`bg-bg bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] bg-transparent ${ showSlides ? 'hidden' : ''} relative`}>
    <div className="h-[60vh] pt-[48px] pl-[230px] z-30 relative">
      
      <h1 className='text-[6rem] capitalize text-white font-black w-[70vw] font-aeonik'>CHANGE THE WAY YOU MONEY</h1>
      <p className='text-[18px] font-aeonik font-normal text-white leading-6 '>For those who want more from their money — <br/>there’s Revolut. Sign up for free, in a tap.</p>
      <button className='bg-[#191C1F] w-[8.25rem] h-[2.6rem] font-medium text-white rounded-full cursor-pointer mt-[10px]'>Get the app</button>
      {/* <Image src={card} fill alt=""/> */}
      </div>
    <div className='w-[100vw] flex justify-center'>
    <div className='bg-girl  bg-transparent bg-center bg-no-repeat bg-cover  w-[800px] h-[800px]  absolute bottom-0'/>
    
    <img className="w-[340px] h-[480px] mx-auto absolute bottom-5 border-2 border-[#cacdcf] rounded-[calc(2.5vh)]" src="/images/main.png"/>
    </div>
    </div>
  )
}
export default page