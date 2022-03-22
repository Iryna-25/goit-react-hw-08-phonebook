import { Nav, NavigationLink, NavList, ListItem } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <ListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </ListItem>

        <ListItem>
          <NavigationLink to="/login">Login</NavigationLink>
        </ListItem>

        <ListItem>
          <NavigationLink to="/register">Register</NavigationLink>
        </ListItem>

        <ListItem>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </ListItem>

        <ListItem>
          <NavigationLink to="/logout">Log Out</NavigationLink>
        </ListItem>
      </NavList>
    </Nav>
  );
}