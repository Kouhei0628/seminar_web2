import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import navImages from "../../data/mainNav-img";
import { PubUrl } from "../../data/PubUrl";

const Navigation = ({ setRef }) => {
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
                  <NavIcon
                    className='nav-icon'
                    src={`${PubUrl}/img/navigation/nav_${navImg.ref}.png`}
                    alt={navImg.alt}
                  />
                  <Link to={`/#${navImg.ref}`}>
                    <NavLogo
                      className='nav-logo'
                      src={`${PubUrl}/img/logos/logo_${navImg.ref}-fff.svg`}
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
        max-width: 150px;
      }
    }
    &:nth-child(4) {
      .nav-logo {
        top: 45%;
      }
    }
    &:nth-child(1),
    :nth-child(6) {
      .nav-icon {
        height: 140px;
      }
    }
  }
`;
const NavIcon = styled.img`
  max-width: 130px;
  height: auto;
`;
const NavLogo = styled.img`
  position: absolute;
  height: 33px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
