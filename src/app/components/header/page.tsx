import React from 'react'
import {listDetails} from "./data";
import {useState, useEffect} from "react";
import Image from "next/image";

const page = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [color, setColor] = useState(false);


  useEffect(() =>{
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  },[])
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 0) {
        // At the top of the page
        setColor(false);
        setIsVisible(true);
      } else {
        if (currentScrollPos < prevScrollPos) {
          // Scrolling up
          setColor(true);
          setIsVisible(true);
        } else {
          // Scrolling down
          setColor(false);
          setIsVisible(false);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);
  
  return (
    <div className={`fixed h-20 z-[100] w-screen flex justify-center items-center ${color ? 'bg-[#cccccc]' : ''} ${isVisible ? '' : 'hidden'}`}>
        <div className='w-[70vw] flex relative items-center'>
        <Image
          src="/images/logoRevolut.svg"
          width={100}
         height={100}
         alt="logo"
         className={`${color ? '' : 'filter invert'} cursor-pointer`}
         />
     

      <ul className={`font-aeonik  ${color ? 'text-black' : 'text-white'} text-base font-normal leading-[1.3rem] gap-x-8 flex items-center px-16`}>  
      {listDetails.map((item, index)=> (
        <li key={index} className='cursor-pointer'>{item}</li>
         ))}
      </ul>
      <div className="flex justify-center items-center gap-3 box-border text-right  absolute right-0">
            <button className={`font-aeonik px-6 py-[0.7rem] text-base font-medium rounded-full cursor-pointer transition-all hover:ease-in-out duration-300 ${color ? 'text-black hover:bg-white' : 'text-white hover:bg-black'}`}>Login</button>
            <button className={`font-aeonik px-6 py-[0.7rem] text-base font-medium rounded-full cursor-pointer hover:bg-opacity-70 transition-all hover:ease-in-out duration-300 ${color ? 'bg-black text-white' : 'bg-white text-black'}`}>Signup</button>
          </div>
      </div> 
    </div>
  )
}

export default page
