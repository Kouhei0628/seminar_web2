import { useEffect } from "react";
import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

const Gears = ({ key, isLeft }) => {
  console.log(isLeft);
  // それぞれの歯車の位置と大きさ回転速度、種類をランダム出力
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  // 歯車の位置
  const positionX = random(10, 80);
  const positionY = random(10, 50);
  // 大きさ
  const size = random(40, 120);
  // 種類
  const type = random(1, 10);
  // 何秒で一周するか
  const speed = random(25, 60);
  // どちらに回転するか
  const turn = random(1, 2);
  return (
    <>
      <GearWrap
        positionX={positionX}
        isLeft={isLeft}
        size={size}
        positionY={positionY}>
        <GearObj type={type} speed={speed} turn={turn}></GearObj>
      </GearWrap>
    </>
  );
};
export default Gears;

const GearWrap = styled.div`
  width: ${prop => prop.size}px;
  height: ${prop => prop.size}px;
  overflow: hidden;
  margin-top: -${prop => prop.positionY}px;
  transform: translateX(
    ${prop => (prop.isLeft ? `-` : ``)}${prop => prop.positionX}%
  );
`;

const GearObj = styled.div`
  background-image: url(${PubUrl}/img/gears/gear_${prop => prop.type}.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  animation: gearRotate ${prop => prop.speed}s linear infinite;
  @keyframes gearRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(${prop => (prop.turn === 1 ? "-360deg" : "360deg")});
    }
  }
`;
