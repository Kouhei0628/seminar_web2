import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";

const Story = () => {
  return (
    <StorySection id='story' className='main__story'>
      <div className='main__story__header'>物語</div>
      <StoryContent className='main__story__content'>
        <img src='ahaha.png' alt='羊皮紙' />
        <p>
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          <br />
          <br />
          ああああああああああああああああああああああああああああああああああああああ
          <br />
          <br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          <br />
          <br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          <br />
          <br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </p>
      </StoryContent>
    </StorySection>
  );
};
export default Story;
const StorySection = styled.section`
  margin: 56px auto;
  width: 87%;
  @media (min-width: ${breakpoints.m}) {
    width: 48%;
  }
`;
const StoryContent = styled.div`
  margin: 28px auto;
  padding: 19px 28px;
  width: 100%;
  background-color: #ffecec;
`;
