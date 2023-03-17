import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartBody, CreatedCartBody, ProductBody } from '../models/models';

export const useApi = () => {
  const [allCarts, setAllCarts] = useState<CartBody[]>();
  const [allProducts, setAllProducts] = useState<ProductBody[]>();
  const navigate = useNavigate();

  const getAllCarts = () => {
    axios
      .get('https://dummyjson.com/carts')
      .then((response) => {
        window.localStorage.setItem('allCarts', JSON.stringify(response.data.carts));
        setAllCarts(response.data.carts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllProducts = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setAllProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCart = (products: CreatedCartBody[]) => {
    axios
      .post('https://dummyjson.com/carts/add', {
        userId: 1,
        products,
      })
      .then((response) => {
        let biggestCartId = 0;
        allCarts?.map((cart) => {
          if (cart.id >= biggestCartId) biggestCartId = cart.id;
        });
        const newAllCarts = allCarts?.concat([
          { ...response.data, id: biggestCartId + 1 },
        ]);
        window.localStorage.setItem('allCarts', JSON.stringify(newAllCarts));
        setAllCarts(newAllCarts);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCart = (cartToDelete: CartBody, carts: CartBody[]) => {
    const newAllCarts = carts.filter((cart) => cart.id !== cartToDelete.id);
    window.localStorage.setItem('allCarts', JSON.stringify(newAllCarts));
    setAllCarts(newAllCarts);
  };

  useEffect(() => {
    const localCarts = window.localStorage.getItem('allCarts');
    localCarts && setAllCarts(JSON.parse(localCarts));
  }, []);

  return {
    getAllProducts,
    addCart,
    deleteCart,
    allCarts,
    setAllCarts,
    getAllCarts,
    allProducts,
  };
};
