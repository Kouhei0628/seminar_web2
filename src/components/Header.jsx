import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { colors } from "../data/colors";
import { PubUrl } from "../data/PubUrl";
import LogoAndCopy from "./LogoAndCopy";

const Header = () => {
  return (
    <header className='header'>
      <HeaderWrap>
        <TopmostCloud />
        <ProvVisual>
          <img
            src={`${PubUrl}/img/header/header_main.png`}
            alt='メインヴィジュアル'
          />
        </ProvVisual>
        <CloudWrap>
          <CloudTop />
          <HeaderCloud>
            <picture>
              {/* WebP対応ブラウザ用  */}
              <source
                className='webp'
                type='image/webp'
                srcSet={`${PubUrl}/img/story/story_bganime.webp`}
              />
              {/* WebP非対応ブラウザ用  */}
              <img
                src={`${PubUrl}/img/story/story_bganime.png`}
                width='1920'
                height='1080'
                alt='雲の流れる動画'
                className='png'
              />
            </picture>
            <LogoAndCopy />
          </HeaderCloud>
          <CloudBottom />
        </CloudWrap>
        <HeaderVisual>
          <img
            className='header_visual'
            src={`${PubUrl}/img/header/header_main.png`}
            alt='メインヴィジュアル'
          />
          <img
            className='blur'
            src={`${PubUrl}/img/header/header_blur.svg`}
            alt='ぼかし画像'
          />
        </HeaderVisual>
      </HeaderWrap>
    </header>
  );
};
export default Header;

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const TopmostCloud = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg-top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  z-index: 2;
  top: -50px;
  left: 0;
  transform: rotate(180deg);
  width: 100%;
  height: 30vw;
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const HeaderCloud = styled.div`
  background-color: ${colors.storyBg};
  width: 100%;
  height: calc(350px + 5vw);
  margin-bottom: -60px;
  @media (min-width: ${breakpoints.m}) {
    height: calc(410px + 15vw);
    margin-bottom: 0;
  }
  position: relative;
  .webp {
    width: 100%;
    height: 100%;
  }
  .png {
    width: 100%;
    height: 100%;
  }
`;
const CloudWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(10px + 30vw);
  left: 0;
  z-index: 1;
  @media (min-width: ${breakpoints.m}) {
    top: unset;
  }
`;
const CloudTop = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg-top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: calc(130px + 10vw);
  @media (min-width: ${breakpoints.m}) {
    display: none;
    height: 0;
  }
`;
const CloudBottom = styled(CloudTop)`
  background-image: url(${PubUrl}/img/story/story_bg-bottom.png);
  background-position: center bottom;
  display: block;
  @media (min-width: ${breakpoints.m}) {
    height: 0;
    display: none;
  }
`;
const HeaderVisual = styled.div`
  width: 100%;
  height: 0;
  display: none;
  & > img {
    width: 100%;
    &.header_visual {
      animation: scaleIn2 2s ease forwards 2s;
      filter: blur(50px);
      @keyframes scaleIn2 {
        0% {
          filter: blur(50px);
        }
        68% {
          filter: blur(0px);
        }
        70% {
          filter: brightness(100%) blur(0px);
        }
        85% {
          filter: brightness(180%) blur(5px);
        }
        100% {
          filter: brightness(100%) blur(0px);
        }
      }
    }
    &.blur {
      transform: translateY(calc(-32vw));
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: block;
    position: absolute;
    z-index: 0;
    top: calc(480px + 5vw);
  }
`;

const ProvVisual = styled.div`
  width: 100%;
  height: 60vw;
  display: block;
  overflow: hidden;
  img {
    width: 100%;
    animation: scaleIn 2s ease forwards 1.5s;
    transform-origin: center center;
    @keyframes scaleIn {
      0% {
        transform: scale(1.5);
      }
      70% {
        transform: scale(1);
        filter: brightness(100%);
      }
      85% {
        filter: brightness(180%);
      }
      100% {
        filter: brightness(100%);
      }
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
