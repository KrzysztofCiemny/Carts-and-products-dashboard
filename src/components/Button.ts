import styled from 'styled-components';

interface Props {
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  min-width: 5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: solid 1px ${({ theme }) => theme.textSecondary};
  border-radius: 1.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'unset')};

  :hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
