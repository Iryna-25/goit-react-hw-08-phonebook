import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 5px;
  font-style: Arial;
  font-size: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-bottom: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 35px;

  border: 1px solid #000;
  border-radius: 7px;
  padding: 7px;
  background-color: #4b0082;
  color: #fff;
  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #663399;
    cursor: pointer;
  }

  // border: 2px solid #000;
  // background-color: #FAEBD7;
  // border-radius: 7px;
  // height: 25px;
  // display: block;
  // padding-right: 10px;
  // padding-left: 10px;
`;

export const NavigationLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-weight: 400;
`;
