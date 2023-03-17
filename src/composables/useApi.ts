import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartBody, CreatedCartBody, ProductBody } from '../models/models';

export const useApi = () => {
  const [allCarts, setAllCarts] = useState<CartBody[]>();
  const [allProducts, setAllProducts] = useState<ProductBody[]>();
  const [deletedCart, setDeletedCart] = useState<CartBody>();
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
        const newAllCarts = allCarts?.concat([
          { ...response.data, id: allCarts.length + 1 },
        ]);
        window.localStorage.setItem('allCarts', JSON.stringify(newAllCarts));
        setAllCarts(newAllCarts);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCart = (cartId: number, carts: CartBody[]) => {
    axios
      .delete(`https://dummyjson.com/carts/${cartId}`)
      .then((response) => {
        const newAllCarts = carts.filter((cart) => cart.id !== response.data.id);
        window.localStorage.setItem('allCarts', JSON.stringify(newAllCarts));
        setAllCarts(newAllCarts);
        setDeletedCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    deletedCart,
    allProducts,
  };
};
