import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";

const LogoAndCopy = () => {
  return (
    <LogoAndCopyS>
      <img src={`${PubUrl}/img/header/header_logocopy.png`} alt='メインロゴ' />
    </LogoAndCopyS>
  );
};
export default LogoAndCopy;

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
  img {
    width: 72%;
    @media (min-width: ${breakpoints.m}) {
      width: 48%;
    }
    @media (min-width: ${breakpoints.l}) {
      width: 40%;
    }
    @media (min-width: 1360px) {
      width: 30%;
    }
  }
`;
