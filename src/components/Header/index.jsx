import React from 'react';
import {
  HeaderWrapper, Nav, StyledNavLink, ArrowSVG,
} from './styles';

function Header() {
  const [close, setClose] = React.useState(false);

  return (
    <HeaderWrapper onClick={() => setClose((prev) => !prev)} close={close}>
      <Nav>
        <StyledNavLink to="/all">All Holidays</StyledNavLink>
        <StyledNavLink to="/random">Random Holiday</StyledNavLink>
      </Nav>
      <ArrowSVG close={close} viewBox="0 0 9 14">
        <path
          d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"
        />
      </ArrowSVG>
    </HeaderWrapper>
  );
}

export default Header;
