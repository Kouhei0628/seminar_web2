import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

const HeaderOrn = ({ logo }) => {
  return (
    <HeaderWrap>
      <HeaderImgA>
        <HeaderImgB
          src={`${PubUrl}/img/logos/logo_${logo}-000.svg`}
          alt={`${logo}のロゴ`}
        />
      </HeaderImgA>
    </HeaderWrap>
  );
};
export default HeaderOrn;

const HeaderWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 151px;
`;

const HeaderImgA = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/common_ribbon.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderImgB = styled.img`
  height: 30%;
  transform: translateY(-3px);
`;
