import { useNavigate } from 'react-router-dom';

import { CartBody } from '../models/models';

let openedCart = <CartBody>{
  id: 0,
  totalQuantity: 0,
  totalProducts: 0,
  total: 0,
  products: [],
};

export const useOpenCart = () => {
  const navigate = useNavigate();

  const openCart = (cart: CartBody) => {
    openedCart = cart;
    console.log(openedCart);
    navigate('/openCart');
  };

  return {
    openCart,
    openedCart,
  };
};
