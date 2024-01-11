"use client";
import Benefits from "./components/benefits/page";
import Footer from "./components/footer/page";
import GetStarted from "./components/getStarted/page";
import TrustedBy from "./components/trustedBy/page";
import { MainContainerWapper } from "./styled";
import Footer2 from "./components/footer2/page";
import SlidingCard from "./components/slidingCard/page";
import HomePage from "./components/homePage/page";
import RevoluteCards from "./components/revoluteCards/page";
import SavingBannerPage from "./components/savingBannerPage/page";
import SendingMoneyPage from "./components/sendingMoneyPage/page";


export default function Home() {
  return (
    // <div>
    // <MainContainerWapper>
    //   <GetStarted/>
    //   <TrustedBy/>
    //   <Benefits/>
    //   <Footer/>
    // </MainContainerWapper>
    // </div>
    
    <div>
      {/* <HomePage/> */}
      {/* <SlidingCard/> */}
      {/* <RevoluteCards/> */}
      {/* <SavingBannerPage/> */}
      <SendingMoneyPage/>
      {/* <Footer2/> */}
    </div>
  );
}
