import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

const Gears = ({ id, isLeft }) => {
  // それぞれの歯車の位置と大きさ回転速度、種類をランダム出力
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  // 歯車の位置
  const positionX = random(10, 80);
  const positionY = random(10, 50);
  // 大きさ
  const size = random(40, 250);
  // 種類
  const type = random(1, 18);
  // 回転速度
  const speed = random(55, 78);
  return (
    <>
      <GearWrap
        positionX={positionX}
        isLeft={isLeft}
        size={size}
        positionY={positionY}
        id={id}>
        <GearObj type={type} speed={speed}></GearObj>
      </GearWrap>
    </>
  );
};
export default Gears;

const GearWrap = styled.div.attrs(props => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    marginTop: -props.positionY,
    transform: `translateX(${props.isLeft ? "-" : ""}${props.positionX}%)`,
  },
}))`
  overflow: hidden;
`;

const GearObj = styled.div.attrs(props => ({
  style: {
    animation: `gearRotate ${props.speed}s linear infinite`,
    backgroundImage: `url(${PubUrl}/img/gears/gear_${props.type}.svg?ver=1.0.0)`,
  },
}))`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  @keyframes gearRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
