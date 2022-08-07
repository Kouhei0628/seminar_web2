import styled from "styled-components";

const Location = () => {
  return (
    <LocationSection id='location'>
      <div className='main__location__header'>地図</div>
      <div className='main__location__text'>
        <img src='some.png' alt='手書きメッセージ' />
      </div>
      <div className='main__location__map'>
        <img src='some.png' alt='東京造形大学の地図' />
      </div>
    </LocationSection>
  );
};
export default Location;
const LocationSection = styled.section`
  margin: 40px auto;
  width: 100%;
  text-align: center;
  background-color: #eaeaea;
`;
