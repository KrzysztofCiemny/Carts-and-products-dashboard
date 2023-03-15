import styled from 'styled-components';

export const Card = styled.div`
  padding: clamp(1rem, 1rem, 2rem);
  margin: 1rem 1rem 1rem 0;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.card};
  border-radius: 1em;
  box-shadow: 0 5px 15px -10px ${({ theme }) => theme.text};
  @media (min-width: 1024px) {
    padding: 1rem 2rem 2rem 2rem;
  }
`;
