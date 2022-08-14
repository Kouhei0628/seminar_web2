import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import navImages from "../../data/mainNav-img";
import { PubUrl } from "../../data/PubUrl";

const FixNavListItem = ({ itemRef, variableRef, alt, setRef }) => {
  const [isSelected, setIsSelected] = useState(false);

  const oCScroll = _ref => setRef(_ref);

  useEffect(() => {
    if (itemRef === variableRef) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [itemRef, variableRef]);
  return (
    <FixNavListItemS className={`${isSelected ? "visible" : ""}`}>
      <Link onClick={() => oCScroll(itemRef)} to={`/#${itemRef}`}>
        <NavIconWrap>
          <NavIcon
            className={`navicon`}
            src={`${PubUrl}/img/navigation/fix/fix_${itemRef}.png`}
            alt={`${alt}`}
          />
        </NavIconWrap>
        <NavLogo
          className='navlogo'
          src={`${PubUrl}/img/logos/logo_${itemRef}-fff.svg`}
        />
      </Link>
    </FixNavListItemS>
  );
};
export default FixNavListItem;

const FixNavListItemS = styled.li`
  width: calc(100% / ${navImages.length});
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.bgBrown};
  transition: all 0.3s ease-in-out;
  a {
    margin: 0 auto;
    text-align: center;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: ${breakpoints.m}) {
  }
  .navicon {
    height: 100%;
  }
  &:nth-of-type(1) {
    .navicon {
      width: 70%;
      height: 100%;
    }
  }
  &:nth-of-type(2) {
    .navicon {
      width: 70%;
    }
    .navlogo {
      width: 95%;
    }
  }
  &:nth-of-type(3) {
    .navicon {
      height: 100%;
    }
  }
  &:nth-of-type(6) {
    .navicon {
      width: 70%;
      height: 100%;
    }
  }
  &.visible {
    transform: scale(0.95);
    filter: brightness(50%);
  }
`;
const NavIcon = styled.img`
  width: 100%;
`;
const NavIconWrap = styled.div`
  width: 100%;
  height: 50%;
`;

const NavLogo = styled.img`
  width: 78%;
`;
