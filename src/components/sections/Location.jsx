import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import HeaderOrn from "../ornaments/HeaderOrn";

const Location = () => {
  return (
    <LocationSection id='location'>
      <HeaderOrn logo='location' />
      <LocationTextA>
        <p>バス乗り場 横浜線相原駅 徒歩2分</p>
      </LocationTextA>
      <LocationMap>
        <img
          src={`${PUrl}/img/location/loc_1.png`}
          alt='バス乗り場から教室までの道のり'
        />
      </LocationMap>
      <LocationTextA>
        <p>東京造形大学８号館２階「８−２０６」教室</p>
      </LocationTextA>
      <LocationMap className='oblong'>
        <img src={`${PUrl}/img/location/loc_2.png`} alt='東京造形大学全体図' />
      </LocationMap>
    </LocationSection>
  );
};
export default Location;

const PUrl = process.env.PUBLIC_URL;

const LocationSection = styled.section`
  margin: 40px auto;
  width: 100%;
  text-align: center;
  overflow: hidden;
  @media (min-width: ${breakpoints.m}) {
    width: 59%;
  }
`;
const LocationTextA = styled.div`
  background-image: url(${PUrl}/img/location/loc_txtbg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  padding: 10px;
  color: white;
  @media (min-width: ${breakpoints.m}) {
    width: 78%;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`;
const LocationMap = styled.div`
  margin: 0 auto;
  width: 100%;
  img {
    margin: 0 auto;
    width: 100%;
    transform: scale(1.2);
  }
  &.oblong img {
    transform: scale(1);
  }
`;
