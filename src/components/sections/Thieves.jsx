import styled from "styled-components";
import thieves from "../data/coats";

const Thieves = () => {
  return (
    <section id='thieves' className='main__thieves'>
      <div className='main__thieves__header'></div>
      <div className='main__thieves__content'>
        <ThievesList>
          {thieves.map(thief => (
            <li key={thief.id}>
              <img src={thief.image} alt={thief.alt} />
              <div className=''>{thief.name}</div>
            </li>
          ))}
        </ThievesList>
      </div>
    </section>
  );
};
export default Thieves;
const ThievesList = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  & > li {
    width: 50%;
  }
`;
