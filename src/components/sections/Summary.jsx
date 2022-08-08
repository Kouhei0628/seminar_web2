import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import summaries from "../data/summaries";

const Summary = () => {
  return (
    <SummarySection id='summary'>
      <div>概要</div>
      <SummaryMessage></SummaryMessage>
      <SummaryContents>
        <SummaryList>
          {summaries.map(summary => (
            <li key={summary.id}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${summary.img}`}
                alt={`${summary.alt}の画像`}
              />
              <div>{summary.title}</div>
              <div style={{ fontSize: "12px" }}>{summary.description}</div>
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
  height: calc(600px + 30vw);
  position: relative;
  overflow: hidden;
  @media (min-width: ${breakpoints.m}) {
    height: calc(320px + 30vw);
  } ;
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
