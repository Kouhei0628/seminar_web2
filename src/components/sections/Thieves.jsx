import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import thieves from "../../data/coats";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Thieves = () => {
  return (
    <ThievesSection id='thieves'>
      <HeaderOrn logo='thieves' />
      <Subtitle>
        <h3>怪盗団とは</h3>
      </Subtitle>
      <ThievesDescr>
        <p>
          フェルミアはアトミシアとの侵略戦争に敗北した。
          <br />
          <br />
          才能をもった科学者たちはアトミシアの貴族に囚われ、貴族の元で新しい発明に
          貢献することを余儀なくされてしまった。
          <br />
          <br />
          アトミシア貴族に恨みをもつフェルミアの一族は組織「アウロラ」を形成し
          <br />
          怪盗団を運営することでアトミシアへの復讐を目論んだ。
        </p>
      </ThievesDescr>

      <ThievesContent>
        <ThievesList>
          {thieves.map(thief => (
            <li key={thief.id}>
              <img
                src={`${PubUrl}/img/thieves/thieves_emb${thief.id}.jpg`}
                alt={thief.alt}
              />
              <ThievesName>
                <p>{thief.name}</p>
              </ThievesName>
            </li>
          ))}
        </ThievesList>
      </ThievesContent>
    </ThievesSection>
  );
};
export default Thieves;

const ThievesSection = styled.section`
  width: 100%;
  height: auto;
  margin: 48px auto;
  @media (min-width: ${breakpoints.m}) {
    width: 74%;
  }
`;

const Subtitle = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_titlebg.svg);
  background-position: center;
  background-repeat: no-repeat;
  margin: 20px auto;
  height: 20px;
  position: relative;
  h3 {
    font-size: 10px;
    margin: 0;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ThievesDescr = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_descbg-s.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vw;
  max-height: 250px;
  width: 90%;
  margin: 0 auto;
  padding: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    color: white;
    font-size: 7px;
  }
`;
const ThievesContent = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_listbg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 27px auto;
  padding: 5px 0px;
  width: 86%;
`;
const ThievesList = styled.ul`
  padding: 0;
  margin: 20px auto;
  width: 90%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  li {
    width: 40%;
    @media (min-width: ${breakpoints.m}) {
      width: 20%;
    }
    img {
      width: 100%;
    }
  }
`;
const ThievesName = styled.div`
  background-image: url(${PubUrl}/img/common_titlebg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    color: white;
    font-size: 8px;
  }
`;
