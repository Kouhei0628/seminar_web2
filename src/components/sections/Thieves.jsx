import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import thieves from "../../data/coats";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Thieves = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
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
          才能をもった科学者たちはアトミシアの貴族に囚われ、貴族の元で新しい発明に貢献することを余儀なくされてしまった。
          <br />
          <br />
          アトミシア貴族に恨みをもつフェルミアの一族は組織「アウロラ」を形成し
          <br />
          怪盗団を運営することでアトミシアへの復讐を目論んだ。
        </p>
      </ThievesDescr>
      <ThievesContent>
        <ThievesList ref={ref}>
          {thieves.map(thief => (
            <li key={thief.id}>
              <img
                className={`card ${inView ? "visible" : ""}`}
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
  height: 100%;
  margin: -165px auto;
  /* margin: 0 auto; */
  transform: translateZ(0);
  @media (min-width: ${breakpoints.m}) {
    width: 74%;
  }
`;

const Subtitle = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_titlebg.svg);
  background-position: center;
  background-repeat: no-repeat;
  margin: 20px auto;
  height: 24px;
  position: relative;
  h3 {
    font-size: 15px;
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
  height: 250px;
  width: 90%;
  margin: 0 auto;
  padding: 8px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    color: #ffeecf;
    font-size: 12px;
    width: 80%;
  }
  @media (min-width: 383px) {
    height: 280px;
    p {
      font-size: 13px;
    }
  }
  @media (min-width: 410px) {
    background-image: url(${PubUrl}/img/thieves/thieves_descbg-m.svg);
    height: 180px;
    p {
      font-size: 11px;
      width: 75%;
    }
  }
  @media (min-width: 620px) {
    height: 220px;
    height: 100px;
    background-image: url(${PubUrl}/img/thieves/thieves_descbg-l.svg);
  }
  @media (min-width: 620px) {
    p {
      font-size: 8px;
    }
    @media (min-width: ${breakpoints.l}) {
      p {
        font-size: 10px;
      }
    }
    height: 130px;
  }
`;
const ThievesContent = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_listbg-m.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 27px auto;
  padding: 5px 0px;
  width: 86%;
  @media (min-width: ${breakpoints.m}) {
    background-image: url(${PubUrl}/img/thieves/thieves_listbg-l.svg);
  }
  @media (min-width: ${breakpoints.l}) {
    background-image: url(${PubUrl}/img/thieves/thieves_listbg-xl.svg);
  }
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
    .card {
      width: 100%;
      opacity: 0;
      &.visible {
        animation: rotate3d 1.1s ease-in-out forwards 0.8s;
        @keyframes rotate3d {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-360deg) scale(0.5);
          }
          50.1% {
            opacity: 0.5;
            transform: perspective(1000px) rotateY(-180deg) scale(0.75);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
        }
      }
    }
    @media (min-width: ${breakpoints.l}) {
      margin: 30px 0;
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
