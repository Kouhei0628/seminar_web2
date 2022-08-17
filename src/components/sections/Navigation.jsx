import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import navImages from "../../data/mainNav-img";
import { PubUrl } from "../../data/PubUrl";
import { SetRefContext } from "../Home";

const Navigation = () => {
  const setRef = useContext(SetRefContext);
  return (
    <>
      <NavigationStyle>
        <NavListWrap>
          <NaviList>
            {navImages.map(navImg => (
              <li key={navImg.id}>
                <button
                  onClick={() => setRef(navImg.ref)}
                  style={{ width: "100%", height: "100%" }}>
                  <Link to={`/#${navImg.ref}`}>
                    <NavIcon
                      className='nav-icon'
                      src={`${PubUrl}/img/navigation/nav_${navImg.ref}.png`}
                      alt={navImg.alt}
                    />
                  </Link>
                </button>
              </li>
            ))}
          </NaviList>
        </NavListWrap>
      </NavigationStyle>
    </>
  );
};
export default Navigation;

const NavigationStyle = styled.nav`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 110px auto;
  @media (max-width: ${breakpoints.m}) {
    display: none;
  }
  @media (min-width: 750px) {
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.l}) {
    margin: 200px auto 0 auto;
  }
`;
const NavListWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;
const NaviList = styled.ul`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  margin: 80px auto;
  width: 80%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
  li {
    margin: 0;
    max-width: 137px;
    height: 137px;
    position: relative;
    border-radius: 50%;
    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.1);
      img {
        transition: all 0.2s linear;
        filter: drop-shadow(0 0 15px black);
      }
    }
    &:nth-child(3) {
      .nav-icon {
        transform: translateY(19px);
        max-width: 150px;
      }
    }
    &:nth-child(4) {
      .nav-icon {
        transform: translateY(29px);
      }
    }
  }
`;
const NavIcon = styled.img`
  max-width: 130px;
  height: auto;
`;
