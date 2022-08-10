import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Gears = ({ position }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlA = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top+=5% 50%",
        end: "1100 80%",
        scrub: true,
      },
    });
    tlA.fromTo(
      ".gear-objA",
      { transform: "translateX(-100%)" },
      { transform: "translateX(-65%)" }
    );
    gsap.registerPlugin(ScrollTrigger);
    const tlB = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top+=5% 50%",
        end: "1100 80%",
        scrub: true,
      },
    });
    tlB.fromTo(
      ".gear-objB",
      { transform: "translateX(100%)" },
      { transform: "translateX(65%)" }
    );
  }, []);

  return (
    <>
      <GearWrap>
        {position === "left" ? (
          <GearObjL className={`gear-objA`} />
        ) : (
          <GearObjR className={`gear-objB`} />
        )}
      </GearWrap>
    </>
  );
};
export default Gears;

const GearWrap = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

const GearObjL = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 300px;
  background-color: silver;
`;
const GearObjR = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 300px;
  background-color: silver;
`;
