import styled from "styled-components";
import { mScreen } from "../breakpoints/breakpoints";
import summaries from "../data/summaries";

const Summary = () => {
  return (
    <SummarySection id='summary' className='main__summary'>
      <div className='main__summary__header'>概要</div>
      <SummaryMessage className='main__summary__message'></SummaryMessage>
      <SummaryContents className='main__summary__content'>
        <SummaryList>
          {summaries.map(summary => (
            <li key={summary.id}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${summary.img}`}
                alt={`${summary.alt}の画像`}
              />
              <div>{summary.title}</div>
              <div>{summary.description}</div>
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
  height: 700px;
  position: relative;
`;
const SummaryList = styled.ul`
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  width: 90%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  li {
    width: 40%;
    @media (min-width: ${mScreen}) {
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
