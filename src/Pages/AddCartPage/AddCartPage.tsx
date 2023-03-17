import { useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { StyledLink } from '../../components/NavLink';
import { useApi } from '../../composables/useApi';
import { CreatedCartBody, ProductBody } from '../../models/models';
import {
  ButtonsContainer,
  CartToAdd,
  Container,
  HeaderContainer,
  LinkContainer,
  ProductsContainer,
  ShowProductsButtonContainer,
} from './AddCartPage.styles';

export const AddCartPage = () => {
  const { allProducts, getAllProducts, addCart } = useApi();
  const [createdCart, setCreatedCart] = useState<CreatedCartBody[]>();
  const [productsCount, setProductsCount] = useState(0);
  const [quantityCount, setQuantityCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const addToCart = (product: ProductBody) => {
    if (productsCount >= 5) return;
    const newProduct = { id: product.id, quantity: 1 };

    if (createdCart) {
      createdCart.map((cart) => {
        if (cart.id === product.id) cart.quantity++;
      });

      if (createdCart.some((it) => it.id === product.id)) {
        setProductsCount(productsCount);
      } else {
        setProductsCount(productsCount + 1);
        const newCart = createdCart.concat([newProduct]);
        setCreatedCart(newCart);
      }
    } else {
      setProductsCount(productsCount + 1);
      setCreatedCart([newProduct]);
      setButtonDisabled(false);
    }

    setQuantityCount(quantityCount + 1);
  };

  return (
    <Container>
      <HeaderContainer>
        <h3>Add cart</h3>
        <CartToAdd>
          <h4>Your cart </h4>
          <p>
            Quantity: <span>{quantityCount}</span>
          </p>
          <p>
            Products: <span>{productsCount}</span>
          </p>
          <p>
            Max <span>5</span> different products{' '}
          </p>
          <Button disabled={buttonDisabled} onClick={() => addCart(createdCart!)}>
            Add cart
          </Button>
        </CartToAdd>
      </HeaderContainer>
      {allProducts ? (
        <ProductsContainer>
          {allProducts.map((product) => (
            <Card key={product.id}>
              <p>
                Name: <span>{product.title}</span>
              </p>
              <p>
                Price: <span>{product.price}$</span>
              </p>
              <ButtonsContainer>
                <Button onClick={() => addToCart(product)}>Add to cart</Button>
              </ButtonsContainer>
            </Card>
          ))}
        </ProductsContainer>
      ) : (
        <ShowProductsButtonContainer>
          <Button type="button" onClick={() => getAllProducts()}>
            Show all products
          </Button>
        </ShowProductsButtonContainer>
      )}
      <LinkContainer>
        <StyledLink to={'/'}>Back to carts</StyledLink>
      </LinkContainer>
    </Container>
  );
};
