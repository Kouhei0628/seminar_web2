import styled from "styled-components";

const Story = () => {
  return (
    <StorySection id='story' className='main__story'>
      <div className='main__story__header'>物語</div>
      <StoryContent className='main__story__content'>
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
        <img src='ahaha.png' alt='羊皮紙' />
      </StoryContent>
    </StorySection>
  );
};
export default Story;
const StorySection = styled.section`
  margin: 30px auto;
  width: 87%;
  background-color: #ffecec;
`;
const StoryContent = styled.div`
  width: 100%;
`;
