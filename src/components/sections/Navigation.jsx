import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import navImages from "../../data/mainNav-img";
import { PubUrl } from "../../data/PubUrl";

const Navigation = () => {
  return (
    <>
      <NavigationStyle className='navigation'>
        <NaviList>
          {navImages.map(navImg => (
            <li key={navImg.id}>
              <button style={{ width: "100%", height: "100%" }}>
                <NavIcon
                  className='nav-icon'
                  src={`${PubUrl}/img/navigation/nav_${navImg.ref}.png`}
                  alt={navImg.alt}
                />
                <NavLogo
                  className='nav-logo'
                  src={`${PubUrl}/img/logos/logo_${navImg.ref}-fff.svg`}
                  alt=''
                />
              </button>
            </li>
          ))}
        </NaviList>
      </NavigationStyle>
    </>
  );
};
export default Navigation;

const NavigationStyle = styled.nav`
  position: relative;
  width: 100%;
  margin: 150px auto;
  @media (max-width: ${breakpoints.m}) {
    display: none;
  }
`;
const NaviList = styled.ul`
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
