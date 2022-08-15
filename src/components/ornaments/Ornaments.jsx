import React from "react";
import styled from "styled-components";
import Gears from "./Gears";

const Ornaments = React.memo(() => {
  const gearAmount = [...Array(150)];
  return (
    <>
      <OrnamentsL className='ornaments-l'>
        <OrnamentWrap className='ornWrapL'>
          <OrnamentInner className='ornInnL'>
            {gearAmount.map((_, i) => (
              <Gears key={i} id={i} isLeft />
            ))}
          </OrnamentInner>
        </OrnamentWrap>
      </OrnamentsL>
      <OrnamentsR className='ornaments-r'>
        <OrnamentWrap className='ornWrapR'>
          <OrnamentInner className='ornInnR'>
            {gearAmount.map((_, i) => (
              <Gears key={i} />
            ))}
          </OrnamentInner>
        </OrnamentWrap>
      </OrnamentsR>
    </>
  );
});
export default Ornaments;

const OrnamentsL = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0%;
  width: 250px;
  height: 100%;
  overflow: hidden;
`;
const OrnamentsR = styled(OrnamentsL)`
  left: unset;
  right: 0;
`;
const OrnamentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const OrnamentInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
