import styled from 'styled-components';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = styled.header<HeaderProps>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.95;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  transition: background-color 0.5s;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    align-items: center;
    padding: 1.3rem;
    transition: background-color 0.5s, margin-top 0.2s, border-bottom 0.2s;
    margin-top: ${({ isScrolled }) => (isScrolled ? '0' : '3rem')};
    border-bottom: ${({ isScrolled }) => (isScrolled ? '1px solid lightgrey;' : 'unset')};
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
  font-weight: 900;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.background};
  z-index: 2;
  border-top: 1px solid lightgrey;
  transition: 0.5s;

  @media (min-width: 768px) {
    height: 100%;
    width: unset;
    position: unset;
    border-top: unset;
  }
`;

export const Nav = styled.ul`
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
