import { useOpenCart } from '../../composables/useOpenCart';
import { CartBody } from '../../models/models';
import { Button } from '../Button';
import { ButtonsContainer, CartLogo, InfoContainer } from './Cart.styles';

interface Props {
  cart: CartBody;
  onDelete: () => void;
}

export const Cart = ({ cart, onDelete }: Props) => {
  const { openCart } = useOpenCart();

  return (
    <>
      <CartLogo>Cart {cart.id}</CartLogo>
      <InfoContainer>
        <p>
          Quantity: <span>{cart.totalQuantity}</span>
        </p>
        <p>
          Total value: <span>{cart.total}$</span>
        </p>
      </InfoContainer>
      <ButtonsContainer>
        <Button type="button" onClick={() => openCart(cart)}>
          Open
        </Button>
        <Button type="button" onClick={onDelete}>
          Delete
        </Button>
      </ButtonsContainer>
    </>
  );
};
