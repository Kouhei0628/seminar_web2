import styled from "styled-components";

const Gears = ({ position }) => {
  return (
    <>
      <GearWrap>
        <GearObj></GearObj>
      </GearWrap>
    </>
  );
};
export default Gears;

const GearWrap = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

const GearObj = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: silver;
  transform: translateX(-50%);
  animation: appear 2s ease-in-out;
  @keyframes appear {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
