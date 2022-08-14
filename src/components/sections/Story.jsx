import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Story = () => {
  return (
    <StorySection>
      <CloudWrapper>
        <StCloudTop>
          {/* <img src={`${PubUrl}/img/story/story_bg-both.gif`} alt='' /> */}
        </StCloudTop>
        <StoryWrap id='story'>
          <HeaderOrn logo='story' />
          <StoryContent>
            <p>
              私はヴェルスラミナに通う生徒。
              <br />
              <br />
              ヴェルスラミナとは
              <br />
              アトミシアに復讐を目論む
              <br />
              組織アウロラが運営している
              <br />
              怪盗を育成するための施設。
              <br />
              <br />
              実力が認められ、アウロラから
              <br />
              届く入団試験に合格すると
              <br />
              怪盗団に所属し
              <br />
              怪盗として暗躍することとなる。
              <br />
              <br />
              ある日私が授業を終え
              <br />
              ヴェルスラミナの寄宿舎に帰ると
              <br />
              一通の封筒が届いていた。
              <br />
              <br />
              中を見てみるとゼニス号の乗車券と
              <br />
              一枚の書類が入っており
              <br />
              書類には入団試験の内容が書かれていた。
              <br />
              <br />
              入団試験の内容はゼニス号に乗り込み
              <br />
              アトミシアの貴族から
              <br />
              政府の情報または
              <br />
              財産を盗むことだった。
            </p>
          </StoryContent>
        </StoryWrap>
        <StCloudBottom />
      </CloudWrapper>
    </StorySection>
  );
};
export default Story;

const fontSizes = {
  s: "font-size: 9px;",
  m: "font-size: 10px;",
  l: "font-size: 13px;",
  xl: "font-size: 16px;",
};

const StorySection = styled.section`
  margin: 56px auto;
  width: 100vw;
`;

const StoryWrap = styled.div`
  margin-top: -85px;
  background-color: ${colors.storyBg};
`;

const CloudWrapper = styled.div`
  width: 100%;
  margin-bottom: 28px;
  margin-right: auto;
  margin-left: auto;
`;

export const StCloudTop = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg-top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(200px + 20vw);
  img {
    width: 100%;
    transform: rotate(180deg);
  }
`;
const StCloudBottom = styled(StCloudTop)`
  background-image: url(${PubUrl}/img/story/story_bg-bottom.png);
`;

const StoryContent = styled.div`
  background-image: url(${process.env.PUBLUC_URL}/img/story/story_bg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 90px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease-in-out;
  transform: rotateZ(0deg);
  p {
    font-size: 6px;
    font-weight: 700;
    @media (min-width: 300px) {
      ${fontSizes.s}
    }
    @media (min-width: 366px) {
      ${fontSizes.m}
    }
    @media (min-width: 425px) {
      ${fontSizes.l}
    }
    @media (min-width: 516px) {
      ${fontSizes.xl}
    }
    @media (min-width: ${breakpoints.m}) {
      ${fontSizes.s}
    }
    @media (min-width: 738px) {
      ${fontSizes.m}
    }
    @media (min-width: ${breakpoints.l}) {
      ${fontSizes.l}
    }
    @media (min-width: 1190px) {
      ${fontSizes.xl}
    }
  }
`;
