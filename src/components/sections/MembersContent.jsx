import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../../data/members";
import MemberListItem from "./MemberListItem";

const MembersContent = () => {
  return (
    <MemContent>
      <MembersList className={``}>
        {members.map((member, i) => (
          <MemberListItem key={i} id={member.id} name={member.name} />
        ))}
      </MembersList>
    </MemContent>
  );
};
export default MembersContent;

const multipleOf5 = members
  .filter(m => m.id % 5 === 0 || (m.id + 1) % 5 === 0)
  .map(
    m =>
      `
    &:nth-child(${m.id}) {
      width: calc(100% / 2);
      justify-content: flex-${m.id % 5 === 0 ? "start" : "end"};
      .list-wrap {
        width: auto;
        p {
          ${
            m.id % 5 === 0
              ? "left: 0; transform: translateX(65px);"
              : "right: unset;"
          }
        }
      }
      @media (max-width: 298px) {
        width: 100%;
        .list-wrap {
          p {
            left: 40%;
            right: unset;
            transform: translateX(0);
          }
        }
      }
      @media (max-width: 377px) {
        justify-content: center;
        width: 50%;
      }
      @media (min-width: 377px) {
        p {
          transform: translateX(${
            (m.id + 1) % 5 === 0 ? "calc(-38px + 18vw)" : "0"
          });
        }
      }
      @media (min-width: ${breakpoints.l}) {
        width: calc(100% / 5);
        justify-content: center;
        .list-wrap p {
          ${
            m.id % 5 === 0
              ? "left: 40%; transform: translateX(0)"
              : "right: initial; transform: translateX(0);"
          }
          
        }
      }
    }`
  );

const MemContent = styled.div`
  margin-top: 30px;
`;

const MembersList = styled.ul`
  padding: 0;
  margin: 0 auto;
  width: 90%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: ${breakpoints.l}) {
    width: 58%;
  }
  li {
    width: 33%;
    margin-bottom: 19px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    @media (max-width: 297px) {
      width: 100%;
    }
    @media (max-width: 377px) {
      width: 50%;
    }
    @media (min-width: ${breakpoints.m}) {
      width: calc(100% / 5);
    }
    @media (max-width: ${breakpoints.m}) {
      ${multipleOf5}
    }
    &.inview {
      transform: translateY(-50px);
    }
  }
`;
