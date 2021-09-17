import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 10vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.close ? '-10vw' : '0')};
  background-color: darkcyan;
  transition: all 0.75s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const Nav = styled.nav`
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  color: aliceblue;
  text-shadow: 0px 0px 2px aliceblue;
  margin: auto;
  text-decoration: none;

`;

const ArrowSVG = styled.svg`
  position: absolute;
  width: 30px;
  height: 30px;
  left: ${(props) => (props.close ? '10vw' : 'calc(10vw - 30px)')};
  top: 0vw;
  transform: ${(props) => (props.close ? 'rotate(360deg)' : 'rotate(180deg)')};
  transition: all 0.75s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

export {
  HeaderWrapper,
  Nav,
  StyledNavLink,
  ArrowSVG,
};
