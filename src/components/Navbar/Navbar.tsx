import { useEffect, useState } from 'react';

import { StyledLink } from '../NavLink';
import { Header, Logo, Nav, NavWrapper } from './Navbar.styles';

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
          <StyledLink to="/addCart">Add cart</StyledLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};
