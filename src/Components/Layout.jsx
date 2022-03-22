import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import { Header, Main, Title, Container } from "./Layout.styled";

export default function Layout() {
  return (
    <Container>
      <Header>
        <Title>
          Phonebook
        </Title>
        <Navigation />
      </Header>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}