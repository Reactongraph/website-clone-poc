"use client";

import Benefits from "./components/benefits/page";
import Footer from "./components/footer/page";
import GetStarted from "./components/getStarted/page";
import TrustedBy from "./components/trustedBy/page";
import { MainContainerWapper } from "./styled";

export default function Home() {
  return (
    <MainContainerWapper>
      <GetStarted/>
      <TrustedBy/>
      <Benefits/>
      <Footer/>
    </MainContainerWapper>
  );
}
