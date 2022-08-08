import styled from "styled-components";
import { createContext, useState } from "react";
import Modal from "./Modal";

import Story from "./sections/Story";
import Thieves from "./sections/Thieves";
import Summary from "./sections/Summary";
import Location from "./sections/Location";
import Members from "./sections/Members";
import Navigation from "./sections/Navigation";

export const ModalContext = createContext();

const Main = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(p => !p);

  return (
    <main style={mainStyle} className='main'>
      <ModalContext.Provider value={{ toggleModal }}>
        {modal && <Modal />}
      </ModalContext.Provider>

      <MainWrap className='main__wrap'>
        <Navigation />
        <Story />
        <Thieves />
        <Summary />
        <Location />
        <Members />
      </MainWrap>
    </main>
  );
};
export default Main;

const mainStyle = {
  textAlign: "center",
  marginBottom: "107px",
};

const MainWrap = styled.div`
  width: 100%;
`;
