import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Cart } from '../../components/Cart/Cart';
import { StyledLink } from '../../components/NavLink';
import { useApi } from '../../composables/useApi';
import {
  CartsContainer,
  Container,
  HeroBanner,
  HeroContent,
  LinkContainer,
  ShowCartsButtonContainer,
} from './HomePage.styles';

export const HomePage = () => {
  const { allCarts, getAllCarts, deleteCart } = useApi();
  return (
    <>
      <HeroBanner>
        <HeroContent>
          <h1>Wellcome to Carts world.</h1>
          <p>
            Here you can see all carts, you can add your carts with selected products, you
            can delete them, and you can also see the products contained in carts.{' '}
          </p>
        </HeroContent>
      </HeroBanner>
      <Container>
        <h3>Carts</h3>
        <LinkContainer>
          <StyledLink to={'/addCart'}>Add new cart</StyledLink>
        </LinkContainer>
        {allCarts ? (
          <CartsContainer>
            {allCarts.map((cart) => (
              <Card key={cart.id}>
                <Cart cart={cart} onDelete={() => deleteCart(cart.id, allCarts)} />
              </Card>
            ))}
          </CartsContainer>
        ) : (
          <ShowCartsButtonContainer>
            <Button type="button" onClick={() => getAllCarts()}>
              Show all carts
            </Button>
          </ShowCartsButtonContainer>
        )}
      </Container>
    </>
  );
};
