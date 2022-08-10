import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterWrap>
        <FooterWhiteSpace></FooterWhiteSpace>
        <FooterSl>
          <div></div>
        </FooterSl>
      </FooterWrap>
    </footer>
  );
};
export default Footer;

const FooterWrap = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
const FooterWhiteSpace = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/footer/foot_smoke.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 45px;
  transform: translateY(-12px);
  display: none;
  @media (min-width: ${breakpoints.m}) {
    display: block;
  }
`;
const FooterSl = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & > div {
    background-image: url(${process.env.PUBLIC_URL}/img/footer/foot_sl.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    transform: scale(1.8);
    transform-origin: center bottom;
    width: 180%;
    height: 100%;
    @media (min-width: ${breakpoints.m}) {
      background-size: cover;
      transform: scale(1);
    }
  }
`;
