import styled from "styled-components";

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterWrap className='footer__wrap'></FooterWrap>
    </footer>
  );
};
export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  height: 48px;
  background-color: #000;
`;
