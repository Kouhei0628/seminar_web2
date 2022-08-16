import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StoryEachText = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-200px",
    triggerOnce: true,
  });
  return (
    <FadeIn ref={ref} className={`${inView ? "inview" : ""}`}>
      {children}
    </FadeIn>
  );
};
export default StoryEachText;

const FadeIn = styled.span`
  display: inline-block;
  line-height: 1;
  opacity: 0;
  &.inview {
    opacity: 1;
    animation: textIn2 1s ease-in forwards;
  }
  @keyframes textIn2 {
    0% {
      clip-path: inset(0 0 100% 0);
    }
    100% {
      clip-path: inset(0 0 0 0);
    }
  }
`;
