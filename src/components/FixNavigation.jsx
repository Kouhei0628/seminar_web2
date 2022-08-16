import { useEffect, useState } from "react";
import { useMedia } from "use-media";
import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";
import navImages from "../data/mainNav-img";
import { colors } from "../data/colors";
import { userAgentFlags } from "../data/userAgentFlags";
import FixNavListItem from "./sections/NavIconWrap";

const FixNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isNarrow = useMedia({ minWidth: breakpoints.m });

  const toggleVisibility = () => {
    const UA = userAgentFlags;
    // 1200pxスクロールしたら表示する
    if (!isNarrow) {
      // for mobile
      window.scrollY > 650 ? setIsVisible(true) : setIsVisible(false);
      if (
        window.scrollY >
        document.getElementById("root").getBoundingClientRect().bottom * 3
      )
        setIsVisible(false);
    } else {
      if (UA.youScrollToBottom) {
        // for narrow desktop
        setIsVisible(true);
        window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const oCOpen = () => {
    window.open("https://twitter.com/kaishizemi2022", "_blank");
  };

  return (
    <>
      <FixSNSIcon className={`${isVisible ? "visible" : "hidden"}`}>
        <button onClick={oCOpen}>
          <img
            src={`${PubUrl}/img/navigation/fix/fix_twitter.svg`}
            alt={`Twitterアイコン`}
          />
        </button>
      </FixSNSIcon>
      <FixWrap className={`fix-nav ${isVisible ? "visible" : "hidden"}`}>
        <FixNavList>
          {navImages.map(ni => (
            <FixNavListItem key={ni.id} itemRef={ni.ref} alt={ni.alt} />
          ))}
        </FixNavList>
      </FixWrap>
    </>
  );
};
export default FixNavigation;

const FixSNSIcon = styled.div`
  position: fixed;
  bottom: calc(43px + 10vw + 15px);
  right: 13px;
  width: 68px;
  height: 68px;
  z-index: 400;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  transform: translateX(100%) rotate(90deg);
  -moz-transform: translateX(100%) rotate(90deg);
  &.visible {
    opacity: 0.9;
    visibility: visible;
    transform: translateX(0) rotate(0deg);
  }
  &.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%) rotate(90deg);
  }
  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const FixWrap = styled.div`
  position: -webkit-fixed;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 400;
  height: calc(53px + 10vw);
  width: 100%;
  background-color: ${colors.summaryBg};
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  transform: translateY(100%);
  transform-origin: top;
  &.visible {
    visibility: visible;
    transform: translateY(0);
  }
  &.hidden {
    visibility: hidden;
    transform: translateY(100%);
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const FixNavList = styled.ul`
  list-style: none;
  padding: 4px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
