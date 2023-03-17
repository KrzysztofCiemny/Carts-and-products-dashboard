import styled from 'styled-components';

export const Container = styled.section`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 1.6rem;
    margin: 2rem 0;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 2rem;
      padding-left: 2rem;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  margin-top: 2rem;
`;
