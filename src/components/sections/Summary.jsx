import styled from "styled-components";
import summaries from "../data/concepts";

const Summary = () => {
  return (
    <section id='summary' className='main__summary'>
      <div className='main__summary__header'></div>
      <div className='main__summary__message'></div>
      <div className='main__summary__content'>
        <SummaryList>
          {summaries.map(summary => (
            <li key={summary.id}>
              <img src={summary.img} alt={`${summary.alt}の画像`} />
              <div>{summary.title}</div>
              <div>{summary.description}</div>
            </li>
          ))}
        </SummaryList>
      </div>
    </section>
  );
};
export default Summary;
const SummaryList = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
`;
