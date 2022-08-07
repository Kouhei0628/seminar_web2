import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./Main";

const Modal = () => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <>
      <div>
        <Button onClick={toggleModal}>x</Button>
      </div>
      <ModalBg></ModalBg>
    </>
  );
};
export default Modal;

const Button = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 6;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: black;
`;
const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  transition: all 0.2s;
`;
