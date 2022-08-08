import styled from "styled-components";
import members from "../data/members";

const Members = () => {
  return (
    <MembersSection id='members'>
      <div className='main__members__header'>団員</div>
      <div className='main__members__content'>
        <MembersList>
          {members.map(member => (
            <li key={member.id}>
              <MembersImg
                src={`${process.env.PUBLIC_URL}/img/${member.iconPath}`}
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
  width: 100%;
  text-align: center;
`;
const MembersImg = styled.img`
  width: 40px;
  margin-right: 15px;
`;
const MembersList = styled.ul`
  margin: 30px auto;
  padding: 0;
  width: 90%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffb3b3;
  & > li {
    width: 50%;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #cbcbcb;
  }
`;
