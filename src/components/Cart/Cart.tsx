import { useApi } from '../../composables/useApi';
import { CartBody } from '../../models/models';
import { Button } from '../Button';
import { ButtonsContainer, CartLogo, InfoContainer } from './Cart.styles';

interface Props {
  cart: CartBody;
}

export const Cart = ({ cart }: Props) => {
  const { deleteCart } = useApi();

  return (
    <>
      <CartLogo>Cart {cart.id}</CartLogo>
      <InfoContainer>
        <p>Quantity: {cart.totalQuantity}</p>
        <p>Total value: {cart.total}</p>
      </InfoContainer>
      <ButtonsContainer>
        <Button type="button">Open</Button>
        <Button type="button" onClick={() => deleteCart(cart.id)}>
          Delete
        </Button>
      </ButtonsContainer>
    </>
  );
};
