import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints/breakpoints";
import { colors } from "../data/colors";

const FixNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const UA = navigator.userAgent;
    const scroll = window.scrollY;
    // 1200pxスクロールしたら表示する
    if (
      (UA.indexOf("iPhone") > 0 && UA.indexOf("iPad") === -1) ||
      UA.indexOf("iPod") > 0 ||
      UA.indexOf("Android") > 0
    ) {
      // for mobile
      scroll > 600 ? setIsVisible(true) : setIsVisible(false);
      if (
        scroll >
        document.getElementById("root").getBoundingClientRect().bottom * 1.9
      ) {
        setIsVisible(false);
      }
    } else {
      // except for mobile
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <FixWrap
        className={`fix-nav ${isVisible ? "visible" : "hidden"}`}></FixWrap>
    </>
  );
};
export default FixNavigation;
const FixWrap = styled.div`
  position: -webkit-fixed;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 400;
  height: calc(43px + 10vw);
  width: 100vw;
  background-color: yellow;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  transition-property: opacity transform;
  transform: translateY(100%);
  transform-origin: top;
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  &.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
