import { Link } from "react-router-dom";
import styled from "styled-components";
import navImages from "../data/mainNav-img";

const Navigation = () => {
  return (
    <>
      <NavigationStyle>
        <NaviList>
          {navImages.map(navImg => (
            <li key={navImg.id}>
              <button>
                <Link to={`/${navImg.ref}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/${navImg.img}`}
                    alt={navImg.alt}
                  />
                </Link>
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
    width: 81px;
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
