import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";

const CloudPicture = () => {
  return (
    <PictureStyle>
      <picture className='for-pc'>
        {/* WebP対応ブラウザ用  */}
        <source
          className='webp'
          type='image/webp'
          srcSet={`${PubUrl}/img/header/header_bganime-p.webp?ver=1.0.0`}
        />
        {/* WebP非対応ブラウザ用  */}
        <img
          src={`${PubUrl}/img/header/header_bganime-p.png?ver=1.0.0`}
          width='1920'
          height='1080'
          alt='雲の流れる動画'
          className='png'
        />
      </picture>
      <picture className='for-mobile'>
        <source
          className='webp'
          type='image/webp'
          srcSet={`${PubUrl}/img/header/header_bganime-m.webp?ver=1.0.0`}
        />
        <img
          src={`${PubUrl}/img/header/header_bganime-m.png?ver=1.0.0`}
          width='1920'
          height='1080'
          alt='雲の流れる動画'
          className='png'
        />
      </picture>
    </PictureStyle>
  );
};
export default CloudPicture;

const PictureStyle = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: cloud 2s linear forwards 2s;
  @keyframes cloud {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .webp {
    width: 100%;
    height: 100%;
  }
  .png {
    width: 100%;
    height: 100%;
  }
  .for-pc {
    width: 100%;
    height: 100%;
    display: none;
    @media (min-width: ${breakpoints.m}) {
      display: block;
    }
  }
  .for-mobile {
    width: 100%;
    height: 100%;
    display: block;
    @media (min-width: ${breakpoints.m}) {
      display: none;
    }
  }
`;
