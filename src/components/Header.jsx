import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { colors } from "../data/colors";
import { PubUrl } from "../data/PubUrl";

const Header = () => {
  return (
    <header>
      <HeaderWrap>
        <TopmostCloud />
        <Prov></Prov>
        <CloudWrap>
          <CloudTop />
          <HeaderCloud>
            <LogoAndCopy>
              <HeaderLogo>
                <img
                  src={`${PubUrl}/img/header/header_logo.png`}
                  alt='メインロゴ'
                />
              </HeaderLogo>
              <HeaderCopy>
                <p>
                  栄光を盗みとれ。
                  <br />
                  盗むのは国の未来だ。
                </p>
              </HeaderCopy>
            </LogoAndCopy>
          </HeaderCloud>
          <CloudBottom />
        </CloudWrap>

        {/* <HeaderVisual>
          <img src='some.png' alt='メインヴィジュアル' />
        </HeaderVisual> */}
      </HeaderWrap>
    </header>
  );
};
export default Header;

const HeaderWrap = styled.div`
  outline: 1px white;
  position: relative;
  width: 100%;
  text-align: center;
`;
const TopmostCloud = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg-top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: -20px;
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
  height: 450px;
  position: relative;
`;
const CloudWrap = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
const CloudTop = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg-top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 150px;
`;
const CloudBottom = styled(CloudTop)`
  background-image: url(${PubUrl}/img/story/story_bg-bottom.png);
  background-position: center bottom;
`;
const HeaderVisual = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  & > img {
    width: 100%;
  }
`;
const Prov = styled.div`
  width: 100%;
  height: 50vw;
  background-color: black;
`;
const LogoAndCopy = styled.div`
  position: absolute;
  top: 0;
`;
const HeaderLogo = styled.div`
  width: 67%;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
  }
`;
const HeaderCopy = styled.div`
  background-image: url(${PubUrl}/img/header/header_copy-bg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 160px;
  position: relative;
  & > p {
    position: absolute;
    width: 100%;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: 700;
  }
`;
