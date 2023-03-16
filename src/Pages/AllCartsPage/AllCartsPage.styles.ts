import styled from 'styled-components';

export const Container = styled.section`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 1.6rem;
    margin-top: 4rem;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 2rem;
      padding-left: 2rem;
    }
  }
`;

export const CartsContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    h3 {
      padding: 2rem;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;
