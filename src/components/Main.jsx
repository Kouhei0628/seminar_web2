import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import Modal from "./Modal";
import Story from "./sections/Story";
import Thieves from "./sections/Thieves";
import Summary from "./sections/Summary";
import Location from "./sections/Location";
import Members from "./sections/Members";
import Navigation from "./sections/Navigation";
import Hidden from "./sections/Hidden";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Header from "./Header";
import Ornaments from "./ornaments/Ornaments";

export const ModalContext = createContext();

const Main = ({ myRef, setRef }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(p => !p);

  const option = {
    scrollTrigger: {
      trigger: ".under-navi",
      start: "top bottom",
      end: "1500 bottom",
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
  return (
    <main style={mainStyle} className='main'>
      <Header />
      <ModalContext.Provider value={{ toggleModal }}>
        {modal && <Modal />}
      </ModalContext.Provider>
      <MainWrap className='main__wrap'>
        <Navigation id='navigation' myRef={myRef} setRef={setRef} />
        <UnderNavi className='under-navi'>
          <Ornaments />
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
