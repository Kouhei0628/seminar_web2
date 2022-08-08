import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../data/members";

const Members = () => {
  return (
    <MembersSection id='members'>
      <div className='main__members__header'>団員</div>
      <div className='main__members__content'>
        <MembersList>
          {members.map((member, i) => (
            <li key={member.id}>
              <MembersImg
                src={`${process.env.PUBLIC_URL}/img/${member.img}`}
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
  width: 35px;
  margin-right: 10px;
`;
const MembersList = styled.ul`
  margin: 30px auto;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffb3b3;
  & > li {
    width: calc(100% / 2);
    height: 60px;
    margin-bottom: 13px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #cbcbcb;
    & > div {
      font-size: 13px;
    }
    @media (min-width: ${breakpoints.m}) {
      width: calc(100% / 3);
    }
    @media (min-width: ${breakpoints.l}) {
      width: calc(100% / 5);
    }
  }
`;
