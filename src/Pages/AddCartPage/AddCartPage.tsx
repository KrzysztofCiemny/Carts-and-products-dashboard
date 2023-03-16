import { useEffect, useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { useApi } from '../../composables/useApi';
import { ProductBody } from '../../models/models';
import {
  ButtonsContainer,
  CartToAdd,
  Container,
  HeaderContainer,
  ProductsContainer,
  ShowProductsButtonContainer,
} from './AddCartPage.styles';

export const AddCartPage = () => {
  const { allProducts, getAllProducts, addCart } = useApi();
  const [cart, setCart] = useState<ProductBody[]>();
  const [count, setCount] = useState(0);

  const addToCart = (product: ProductBody) => {
    if (count === 5) return;

    if (cart) {
      const newCart = cart.concat([product]);
      setCart(newCart);
    } else {
      setCart([product]);
    }
    console.log(cart);
    setCount(count + 1);
  };

  return (
    <Container>
      <HeaderContainer>
        <h3>Add cart</h3>
        <CartToAdd>
          <p>Your cart </p>
          <p>Products: {count}</p>
          <p>max 5 products </p>
          <Button onClick={() => addCart(cart!)}>Add cart</Button>
        </CartToAdd>
      </HeaderContainer>
      {allProducts ? (
        <ProductsContainer>
          {allProducts.map((product) => (
            <Card key={product.id}>
              <p>Product: {product.title}</p>
              <p>Price: {product.price}</p>
              <ButtonsContainer>
                <Button onClick={() => addToCart(product)}>Add to cart</Button>
              </ButtonsContainer>
            </Card>
          ))}
        </ProductsContainer>
      ) : (
        <ShowProductsButtonContainer>
          {/* <StyledLink to="/allCarts">Show all carts</StyledLink> */}
          <button type="button" onClick={() => getAllProducts()}>
            Show all products
          </button>
        </ShowProductsButtonContainer>
      )}
    </Container>
  );
};
