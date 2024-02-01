"use client";
import { MainContainerWapper } from "./styled";
import Footer2 from "./components/footer2/page";
import SlidingCard from "./components/slidingCard/page";
import HomePage from "./components/homePage/page";
import RevoluteCards from "./components/revoluteCards/page";
import SavingBannerPage from "./components/savingBannerPage/page";
import SendingMoneyPage from "./components/sendingMoneyPage/page";
import SendPage from "./components/sendPage/page";
import StocksAndCommoditiesPage from "./components/stocksAndCommoditiesPage/page";
import GetRevolutPage from "./components/getRevolutPage/page";
import Header from "./components/header/page"

export default function Home() {
  return (
  <div>
     <Header/>
      {/* <HomePage/> */}
      <SlidingCard/>
      <RevoluteCards/>
      <SavingBannerPage/>
      <SendingMoneyPage/>
      <SendPage/>
      <StocksAndCommoditiesPage/>
      <GetRevolutPage/>
      <Footer2/>
    </div>
  );
}
