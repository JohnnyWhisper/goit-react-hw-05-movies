import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/App/App.styled';
import {
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from 'components/Header/Heder. styled';

export const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </LinkWrapper>
        </Container>
      </NavBar>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
