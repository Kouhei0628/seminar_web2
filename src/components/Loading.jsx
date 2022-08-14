import styled from "styled-components";
import { PubUrl } from "../data/PubUrl";

const Loading = ({ isLoaded }) => {
  return (
    <LoadWrap className={`${isLoaded ? "hidden" : "visible"}`}>
      <div>
        <img
          src={`${PubUrl}/img/header/header_logo.png`}
          alt={`ロード中のロゴ`}
        />
      </div>
    </LoadWrap>
  );
};
export default Loading;
const LoadWrap = styled.div`
  background-color: #2c2825;
  background-image: url(${PubUrl}/img/background/all-bg_gear2.png);
  background-repeat: repeat;
  background-size: 90px;
  background-position: center;
  position: fixed;
  z-index: 800;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.25s ease-in-out 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
  div {
    width: 80vw;
    height: 40vw;
    margin: 0 auto;
    background-image: url(${PubUrl}/img/loading.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 52%;
      animation: fadeIn 1.5s ease-in-out;
      @keyframes fadeIn {
        from {
          filter: blur(10px);
          opacity: 0;
        }
        to {
          filter: blur(0);
          opacity: 1;
        }
      }
    }
  }
`;
