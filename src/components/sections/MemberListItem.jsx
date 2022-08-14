import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

const MemberListItem = ({ id, name }) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 1,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });

  return (
    <li ref={ref}>
      <div className='list-wrap'>
        <ImageWrap>
          <MembersGear
            src={`${PubUrl}/img/members/mem_icon.svg`}
            alt={`歯車`}
          />
          <MemberIcon
            src={`${PubUrl}/img/members/member/m-${id}.jpg`}
            alt={`${name}`}
          />
        </ImageWrap>
        <MemberNameS className={`${inView ? "show" : ""}`}>{name}</MemberNameS>
      </div>
    </li>
  );
};
export default MemberListItem;

const MembersGear = styled.img`
  width: 68%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;
const MemberIcon = styled.img`
  width: 33%;
  position: absolute;
  top: 45px;
  left: 37%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 4;
`;
const ImageWrap = styled.div`
  position: relative;
  width: 150px;
  height: 110px;
`;

const MemberNameS = styled.p`
  position: absolute;
  z-index: 6;
  bottom: 16px;
  left: 40%;
  right: initial;
  font-size: 12px;
  font-weight: 600;
  color: white;
  opacity: 0;
  &.show {
    animation: textIn 1s ease-in-out forwards;
    @keyframes textIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
