import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartBody, ProductBody } from '../models/models';

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

  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setAllProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async (products: ProductBody[]) => {
    try {
      const response = await axios.post('https://dummyjson.com/carts/add', {
        userId: 1,
        products,
      });
      const newAllCarts = allCarts?.concat([
        { ...response.data, id: allCarts.length + 1 },
      ]);
      window.localStorage.setItem('allCarts', JSON.stringify(newAllCarts));
      setAllCarts(newAllCarts);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCart = async (cartId: number) => {
    try {
      const response = await axios.delete(`https://dummyjson.com/carts/${cartId}`);
      setDeletedCart(response.data);
    } catch (error) {
      console.log(error);
    }
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
