import styled from 'styled-components';

export const HeroBanner = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 3rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.3;
  }

  @media (min-width: 1024px) {
    max-width: 70ch;
    h1 {
      padding-top: 4rem;
      font-size: 3rem;
    }
  }
  @media (min-width: 1440px) {
    h1 {
      padding-top: 6rem;
    }
  }
`;

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

export const CartLogo = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;