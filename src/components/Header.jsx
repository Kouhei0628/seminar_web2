import styled from "styled-components";

const Header = () => {
  return (
    <header className='header'>
      <HeaderWrap className='header__wrap'>
        <HeaderCloud>
          <HeaderLogo className='header__logo'>
            <img src='some.jpg' alt='メインロゴ' />
          </HeaderLogo>
          <HeaderCopy className='header__copy'>
            <img src='catch.png' alt='羊皮紙の画像' />
            <p>
              栄光を盗みとれ。
              <br />
              盗むのは国の未来だ。
            </p>
          </HeaderCopy>
        </HeaderCloud>
        <HeaderVisual className='headeHeaderVisual'>
          <img src='some.png' alt='メインヴィジュアル' />
        </HeaderVisual>
      </HeaderWrap>
    </header>
  );
};
export default Header;
const HCloudHeight = 330;
const HVisualHeight = 310;
const HOverlap = 80;

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${HCloudHeight + HVisualHeight - HOverlap}px;
  text-align: center;
  background-color: #b2f1ff;
`;
const HeaderCloud = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: aliceblue;
  opacity: 0.8;
  width: 100%;
  height: ${HCloudHeight}px;
`;
const HeaderVisual = styled.div`
  position: absolute;
  top: ${HCloudHeight - HOverlap}px;
  width: 100%;
  height: ${HVisualHeight}px;
  z-index: 1;
  background-color: #ffc7c7;
  & > img {
    width: 100%;
  }
`;
const HeaderLogo = styled.div`
  margin-top: 60px;
`;
const HeaderCopy = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 150px;
  position: relative;
  background-color: #ffc4a8;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #fff;
    opacity: 0.3;
  }
  & > p {
    position: absolute;
    width: 100%;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;
