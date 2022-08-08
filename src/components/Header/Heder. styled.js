import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f0e68c;

  box-shadow: 0px 2px 10px 1px #240b36;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  height: 90px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  font-weight: 700;
  color: #000000;

  text-transform: uppercase;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: cubicBezier;

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: red;
  }

  &.active {
    color: red;
    background-color: mediumBlue;

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-left: 28px;
`;
