import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../../data/members";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Members = () => {
  return (
    <MembersSection id='members'>
      <HeaderOrn logo='members' />
      <div className='main__members__content'>
        <MembersList>
          {members.map((member, i) => (
            <li key={member.id}>
              <MembersImg
                src={`${PubUrl}/img/members/mem_icon.svg`}
                alt={`${member.name}のアイコン画像`}
              />
              <div>{member.name}</div>
            </li>
          ))}
        </MembersList>
      </div>
    </MembersSection>
  );
};
export default Members;

const MembersSection = styled.section`
  margin: 40px auto;
  width: 90%;
  text-align: center;
  @media (min-width: ${breakpoints.m}) {
    width: 59%;
  }
  @media (min-width: ${breakpoints.l}) {
    width: 60%;
  }
`;
const MembersImg = styled.img`
  width: 180px;
`;
const MembersList = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > li {
    width: calc(100% / 2);
    margin-bottom: 19px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    position: relative;
    div {
      position: absolute;
      bottom: 25%;
      left: 88px;
      font-size: 12px;
      color: white;
    }
    @media (min-width: 460px) {
      width: calc(100% / 3);
    }
    @media (min-width: ${breakpoints.l}) {
      width: calc(100% / 5);
    }
  }
`;
