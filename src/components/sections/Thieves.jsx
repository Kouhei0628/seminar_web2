import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import thieves from "../data/coats";

const Thieves = () => {
  return (
    <ThievesSection id='thieves' className='main__thieves'>
      <div className='main__thieves__header'>怪盗団</div>
      <ThievesContent className='main__thieves__content'>
        <ThievesList>
          {thieves.map(thief => (
            <li key={thief.id}>
              <img src={thief.image} alt={thief.alt} />
              <div>{thief.name}</div>
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
const ThievesContent = styled.div`
  margin: 27px auto;
  padding: 5px 0px;
  width: 86%;
  background-color: beige;
  border-radius: 13px;
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
    div {
      padding: 3px;
      width: 100%;
      font-size: 12px;
      text-align: center;
      background-color: #313131;
      color: white;
      border-radius: 5px;
    }
  }
`;
