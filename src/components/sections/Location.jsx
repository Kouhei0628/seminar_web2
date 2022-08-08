import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";

const Location = () => {
  return (
    <LocationSection id='location'>
      <div>地図</div>
      <LocationText>
        <p>東京造形大学８号館２階「８−２０６」</p>
      </LocationText>
      <LocationMap>
        <img src='some.png' alt='東京造形大学の地図' />
      </LocationMap>
    </LocationSection>
  );
};
export default Location;

const LocationSection = styled.section`
  margin: 40px auto;
  width: 87%;
  text-align: center;
  @media (min-width: ${breakpoints.m}) {
    width: 59%;
  }
`;
const LocationText = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 8px;
  @media (min-width: ${breakpoints.m}) {
    width: 78%;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`;
const LocationMap = styled.div`
  margin-top: 30px;
  width: auto;
  height: 140px;
  background-color: yellow;
`;
