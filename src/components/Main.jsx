import styled from "styled-components";
import navImages from "./data/mainNav-img";
import { createContext, useState } from "react";
import Modal from "./Modal";

import { Link } from "react-router-dom";
import Story from "./sections/Story";
import Thieves from "./sections/Thieves";
import Summary from "./sections/Summary";
import Location from "./sections/Location";
import Members from "./sections/Members";

export const ModalContext = createContext();

const Main = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(p => !p);

  return (
    <main style={{ textAlign: "center" }} className='main'>
      <ModalContext.Provider value={{ toggleModal }}>
        {modal && <Modal />}
      </ModalContext.Provider>

      <MainWrap className='main__wrap'>
        <Navigation>
          <NaviList>
            {navImages.map(navImg => (
              <li key={navImg.id}>
                <button>
                  <Link to={`${navImg.ref}`}>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/${navImg.img}`}
                      alt={navImg.alt}
                    />{" "}
                  </Link>
                </button>
              </li>
            ))}
          </NaviList>
        </Navigation>
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

const MainWrap = styled.div`
  width: 100%;
`;

const Navigation = styled.nav`
  position: relative;
  width: 100%;
`;
const NaviList = styled.ul`
  margin: 80px auto;
  width: 80%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    width: 60px;
    background-color: aliceblue;
    button {
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(1) {
    }
  }
`;
