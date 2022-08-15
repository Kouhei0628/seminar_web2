import styled from "styled-components";

const Gears = () => {
  return (
    <>
      <GearWrap>
        <GearObjL className={`gear-objA`} />
        <GearObjR className={`gear-objB`} />
      </GearWrap>
    </>
  );
};
export default Gears;

const GearWrap = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const GearObjL = styled.div`
  height: 100%;
  width: 100%;
  background-color: silver;
`;
const GearObjR = styled.div`
  height: 100%;
  width: 100%;
  background-color: silver;
`;
