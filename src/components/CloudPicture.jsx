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
          srcSet={`${PubUrl}/img/header/header_bganime-p.webp`}
        />
        {/* WebP非対応ブラウザ用  */}
        <img
          src={`${PubUrl}/img/header/header_bganime-p.png`}
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
          srcSet={`${PubUrl}/img/header/header_bganime-m.webp`}
        />
        <img
          src={`${PubUrl}/img/header/header_bganime-m.png`}
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
