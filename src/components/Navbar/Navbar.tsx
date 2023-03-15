import React, { useEffect, useState } from 'react';
import {
  Header,
  Logo,
  Nav,
  NavWrapper,
  StyledLink,
} from './Navbar.styles';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const headerScrollAnimation = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', headerScrollAnimation);

    return () => {
      window.removeEventListener('scroll', headerScrollAnimation);
    };
  }, []);

  return (
    <Header isScrolled={isScrolled}>
      <Logo>Carts world</Logo>
      <NavWrapper>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/allCarts">All carts</StyledLink>
          <StyledLink to="/">Add cart</StyledLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};