import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.textSecondary};
  padding: 0 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  :hover {
    color: ${({ theme }) => theme.text};
  }

  @media (min-width: 768px) {
    margin: 0 0.4rem;
    padding: 0 0.5rem;
    font-size: 1rem;
    font-weight: unset;
    ::after {
      content: '';
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.textHighlited};
      position: absolute;
      bottom: -0.5rem;
      right: 0%;
      transition: 0.3s;
    }
    :hover::after {
      width: 100%;
    }
  }
`;
