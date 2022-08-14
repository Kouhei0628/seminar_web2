import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import { PubUrl } from "../../data/PubUrl";
import summaries from "../../data/summaries";
import HeaderOrn from "../ornaments/HeaderOrn";
import { StCloudTop } from "./Story";

const Summary = () => {
  return (
    <SummarySection>
      <CloudWrap>
        <CloudTop />
        <SummWrap id='summary'>
          <HeaderOrn logo='summary' />
          <SummaryMessage>
            <img
              src={`${PubUrl}/img/summary/sum_top-font.png`}
              alt='アトラクション説明文'
            />
          </SummaryMessage>
          <SummaryContents>
            <SummaryList>
              {summaries.map(summary => (
                <li key={summary.id}>
                  <img
                    src={`${PubUrl}/img/summary/sum_${summary.img}.svg`}
                    alt={`${summary.alt}の画像`}
                  />
                  <Title>
                    <p>{summary.title}</p>
                  </Title>
                  <Description>
                    <p>{summary.description}</p>
                  </Description>
                </li>
              ))}
            </SummaryList>
          </SummaryContents>
        </SummWrap>
        <CloudBottom />
      </CloudWrap>
    </SummarySection>
  );
};
export default Summary;

const SummarySection = styled.section`
  margin: 50px auto;
  width: 100vw;
`;
const CloudWrap = styled.div`
  width: 100%;
  overflow-y: visible;
  overflow-x: hidden;
`;
const CloudTop = styled(StCloudTop)`
  background-image: url(${PubUrl}/img/summary/summary_bg-top.png);
`;
const CloudBottom = styled(StCloudTop)`
  background-image: url(${PubUrl}/img/summary/summary_bg-bottom.png);
`;
const SummWrap = styled.div`
  background-color: ${colors.summaryBg};
  margin-top: -50px;
  margin-bottom: -60px;
`;
const SummaryList = styled.ul`
  transform: translateZ(0);
  padding: 0;
  margin: 0 auto;
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  li {
    width: 45%;
    @media (min-width: ${breakpoints.m}) {
      width: 20%;
    }
    img {
      width: 100%;
    }
  }
`;

const SummaryMessage = styled.div`
  transform: translateZ(0);
  background-image: url(${PubUrl}/img/summary/summary-mess_bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transform: translateY(-15px);
    width: calc(260px - 5vw);
  }
`;

const SummaryContents = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${breakpoints.m}) {
    width: 90%;
  }
`;
const Title = styled.div`
  background-image: url(${PubUrl}/img/common_titlebg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 20px;
  p {
    margin: 0;
    color: white;
    font-size: 15px;
  }
`;
const Description = styled.div`
  background-image: url(${PubUrl}/img/summary/sum_descbg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: calc(25px + 10vw);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  p {
    margin: 0;
    font-size: 11px;
    width: 80%;
    font-weight: 600;
  }
`;

export { CloudWrap, CloudTop, CloudBottom };
