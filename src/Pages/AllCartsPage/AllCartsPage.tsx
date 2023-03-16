import { useEffect, useState } from 'react';

import { Card } from '../../components/Card';
import { Cart } from '../../components/Cart/Cart';
import { StyledLink } from '../../components/NavLink';
import { useApi } from '../../composables/useApi';
import { CartBody } from '../../models/models';
import { LinkContainer } from '../AllCartsPage/AllCartsPage.styles';
import { CartsContainer, Container } from './AllCartsPage.styles';

export const AllCartsPage = () => {
  const { allCarts } = useApi();

  return (
    <Container>
      <h3>All carts</h3>
      <LinkContainer>
        <StyledLink to={'/addCart'}>Add new cart</StyledLink>
      </LinkContainer>
      <CartsContainer>
        {allCarts ? (
          allCarts!.map((cart) => (
            <Card key={cart.id}>
              <Cart cart={cart} />
            </Card>
          ))
        ) : (
          <div>Loading..</div>
        )}
      </CartsContainer>
    </Container>
  );
};
