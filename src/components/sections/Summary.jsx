import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { PubUrl } from "../../data/PubUrl";
import summaries from "../../data/summaries";
import HeaderOrn from "../ornaments/HeaderOrn";

const Summary = () => {
  return (
    <SummarySection id='summary'>
      <HeaderOrn logo='summary' />
      <SummaryMessage></SummaryMessage>
      <SummaryContents>
        <SummaryList>
          {summaries.map(summary => (
            <li key={summary.id}>
              <img
                src={`${PubUrl}/img/summary/sum_${summary.img}.png`}
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
    </SummarySection>
  );
};
export default Summary;

const SummarySection = styled.section`
  margin: 50px auto;
  width: 80%;
  @media (min-width: ${breakpoints.m}) {
  } ;
`;
const SummaryList = styled.ul`
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
  width: 100%;
  height: 300px;
  background-color: aliceblue;
`;
const SummaryContents = styled.div`
  width: 100%;
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
    font-size: 9px;
    font-weight: 600;
  }
`;
