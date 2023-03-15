import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ButtonsContainer, CartLogo, CartsContainer, Container, HeroBanner, HeroContent, InfoContainer } from './HomePage.styles';
import { useApi } from '../../composables/useApi';

export const HomePage = () => {
  const { allCarts } = useApi()
  const fiveOfCarts = allCarts?.slice(0, 8)

  return (
    <>
      <HeroBanner>
        <HeroContent>
          <h1>
            Wellcome to Carts world.
          </h1>
          <p>Here you can see all carts,
            you can add your carts with selected products,
            you can delete them,
            and you can also see the products contained in carts. </p>
        </HeroContent>
      </HeroBanner>
      <Container>
        <h3>Carts</h3>
        <CartsContainer>
          {allCarts ? (fiveOfCarts!.map((cart) => (
            <Card key={cart.id}>
              <CartLogo>Cart {cart.id}</CartLogo>
              <InfoContainer>
                <p>Quantity: {cart.totalQuantity}</p>
                <p>Total value: {cart.total}</p>
              </InfoContainer>
              <ButtonsContainer>
                <Button type="button">
                  Open
                </Button>
                <Button type="button">
                  Delete
                </Button>
              </ButtonsContainer>
            </Card>
          ))) : (
            <div>Loading..</div>
          )}
          {/* <Card>Cart 2</Card>
          <Card>Cart 3</Card>
          <Card>Cart 4</Card>
          <Card>Cart 5</Card> */}
        </CartsContainer>
      </Container>
    </>
  );
};