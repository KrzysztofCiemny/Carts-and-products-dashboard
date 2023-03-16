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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartToAdd = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 0.2rem 1rem 1rem 1rem;
  border-radius: 1rem;
  min-width: 10rem;
  box-shadow: 5px 5px 8px 1px gray;
`;

export const ProductsContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    h3 {
      padding: 2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const ShowProductsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

export const LinkContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;
