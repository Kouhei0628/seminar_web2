import React from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { colors } from "../data/colors";
import { PubUrl } from "../data/PubUrl";

const Footer = React.memo(() => {
  const twitterLink = "https://twitter.com/kaishizemi2022";
  return (
    <FooterWrap className='footer'>
      <FooterInner>
        <FooterWhiteSpace>
          <a href={twitterLink} target='_blank' rel='noreferrer'>
            <div>
              <img
                src={`${PubUrl}/img/footer/foot_twitter.svg`}
                alt={`Twitterロゴ`}
              />
              <span>@kaishizemi2022</span>
            </div>
          </a>
        </FooterWhiteSpace>
        <FooterSl>
          <div></div>
        </FooterSl>
      </FooterInner>
    </FooterWrap>
  );
});
export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  height: calc(220px + 8vw);
  overflow: hidden;
  position: absolute;
  bottom: 0;
  z-index: 3;
`;
const FooterInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: ${colors.membersBg}; */
`;
const FooterWhiteSpace = styled.div`
  background-image: url(${PubUrl}/img/footer/foot_smoke.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto;
  position: absolute;
  display: none;
  top: 0;
  left: 50%;
  z-index: 1;
  a {
    margin: 0 auto;
    display: block;
    text-decoration: none;
    color: #5a5a5a;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(20px);
    img {
      width: 15px;
      margin-right: 7px;
    }
    span {
      display: inline-block;
      font-size: 15px;
      font-weight: 100;
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: flex;
    width: 100%;
    height: 75px;
    transition: all 0.2s ease-in-out;
    transform: translate(calc(-40% - 5vw), calc(250% - 10vw));
    &:hover {
      transform: translate(calc(-40% - 5vw), calc(250% - 10vw)) scale(1.1);
    }
  }
  @media (min-width: 918px) {
    display: flex;
    width: 100%;
    height: 75px;
    transition: all 0.2s ease-in-out;
    transform: translate(calc(-45% - 5vw), calc(250% - 10vw));
    &:hover {
      transform: translate(calc(-45% - 5vw), calc(250% - 10vw)) scale(1.1);
    }
  }
  @media (min-width: ${breakpoints.l}) {
    width: 530px;
    height: 95px;
    transform: translate(-50%, calc(200% - 10vw));
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(-50%, calc(200% - 10vw)) scale(1.1);
    }
  }
`;
const FooterSl = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  & > div {
    background-image: url(${PubUrl}/img/footer/foot_sl.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    transform: scale(1.7);
    transform-origin: center bottom;
    width: 100%;
    height: 100%;
    @media (min-width: ${breakpoints.m}) {
      background-size: contain;
      transform: scale(1);
    }
  }
`;
