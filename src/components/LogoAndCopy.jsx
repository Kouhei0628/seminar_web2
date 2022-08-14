import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";

const LogoAndCopy = () => {
  return (
    <LogoAndCopyS>
      <HeaderLogo>
        <img src={`${PubUrl}/img/header/header_logo.png`} alt='メインロゴ' />
      </HeaderLogo>
      <HeaderCopy>
        <img
          src={`${PubUrl}/img/header/header_copy-font.png`}
          alt='アトラクションのコンセプト文'
        />
      </HeaderCopy>
    </LogoAndCopyS>
  );
};
export default LogoAndCopy;

const HeaderCopy = styled.div`
  background-image: url(${PubUrl}/img/header/header_copy-bg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: calc(510px - 8vw);
    transform: translateY(-15px);
  }
`;
const HeaderLogo = styled.div`
  width: 67%;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
  }
  @media (min-width: ${breakpoints.m}) {
    width: 40%;
  }
`;
const LogoAndCopyS = styled.div`
  height: 100%;
  width: 100%;
  /* margin-top: -90px; */
  @media (min-width: ${breakpoints.m}) {
    margin-top: 0;
  }
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
