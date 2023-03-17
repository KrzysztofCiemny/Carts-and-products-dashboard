import styled from 'styled-components';

export const Card = styled.div`
  padding: clamp(1rem, 1rem, 2rem);
  margin: 1rem 1rem 1rem 0;
  width: 19rem;
  background-color: ${({ theme }) => theme.card};
  border-radius: 1em;
  box-shadow: 0 5px 15px -10px ${({ theme }) => theme.text};
  span {
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    padding: 1rem 2rem 2rem 2rem;
  }
`;
