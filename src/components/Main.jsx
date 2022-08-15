import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import Modal from "./Modal";

import Story from "./sections/Story";
import Thieves from "./sections/Thieves";
import Summary from "./sections/Summary";
import Location from "./sections/Location";
import Members from "./sections/Members";
import Navigation from "./sections/Navigation";
import Gears from "./ornaments/Gears";
import Hidden from "./sections/Hidden";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./Footer";
import { colors } from "../data/colors";
import { breakpoints } from "../breakpoints/breakpoints";
import Header from "./Header";

export const ModalContext = createContext();

const Main = ({ myRef, setRef }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(p => !p);

  const option = {
    scrollTrigger: {
      trigger: ".under-navi",
      start: "top+=5% 50%",
      end: "1100 80%",
      scrub: true,
    },
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlA = gsap.timeline(option);
    tlA.fromTo(
      ".ornInnL",
      { transform: "translateX(-100%)" },
      { transform: "translateX(0%)" }
    );
    const tlB = gsap.timeline(option);
    tlB.fromTo(
      ".ornInnR",
      { transform: "translateX(100%)" },
      { transform: "translateX(30%)" }
    );
  });
  const gearAmount = [...Array(150)];
  return (
    <main style={mainStyle} className='main'>
      <Header />
      <ModalContext.Provider value={{ toggleModal }}>
        {modal && <Modal />}
      </ModalContext.Provider>
      <MainWrap className='main__wrap'>
        <Navigation id='navigation' myRef={myRef} setRef={setRef} />
        <UnderNavi className='under-navi'>
          <OrnamentsL className='ornaments-l'>
            <OrnMargin />
            <OrnamentWrap className='ornWrapL'>
              <OrnamentInner className='ornInnL'>
                {gearAmount.map((_, i) => (
                  <Gears key={i} id={i} isLeft />
                ))}
              </OrnamentInner>
            </OrnamentWrap>
          </OrnamentsL>
          <OrnamentsR className='ornaments-r'>
            <OrnMargin />
            <OrnamentWrap className='ornWrapR'>
              <OrnamentInner className='ornInnR'>
                {gearAmount.map((_, i) => (
                  <Gears key={i} />
                ))}
              </OrnamentInner>
            </OrnamentWrap>
          </OrnamentsR>
          <Story />
          <Thieves />
          <Summary />
          <Location />
          <Members />
          <Hidden />
          <Footer />
        </UnderNavi>
      </MainWrap>
    </main>
  );
};
export default Main;

const OrnamentsL = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0%;
  width: 150px;
  height: 100%;
  overflow: hidden;
  @media (min-width: ${breakpoints.m}) {
    width: 150px;
  }
`;
const OrnamentsR = styled(OrnamentsL)`
  left: unset;
  right: 0;
`;
const OrnMargin = styled.div`
  width: 100%;
  height: 800px;
  @media (min-width: 500px) {
    height: 1600px;
  }
  @media (min-width: ${breakpoints.l}) {
    height: 1900px;
  }
`;
const OrnamentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const OrnamentInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const UnderNavi = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const mainStyle = {
  textAlign: "center",
  position: "relative",
  width: "100%",
  height: "100%",
};

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
