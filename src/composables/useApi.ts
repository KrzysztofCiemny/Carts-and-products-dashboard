import axios from "axios";

export const useApi = () => {
  const getAllCarts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/carts');
      console.log(response.data)

    } catch (error) {

    }
  }
  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log(response.data)

    } catch (error) {

    }
  }
  const addCart = async (products: string[]) => {
    try {
      const response = await axios.post('https://dummyjson.com/carts/add', 
        {
          userId: 1,
          products
        }
      );
      console.log(response.data)

    } catch (error) {

    }
  }
  const deleteCart = async (cartId: number) => {
    try {
      const response = await axios.delete(`https://dummyjson.com/carts/${cartId}`);
      console.log(response.data)

    } catch (error) {

    }
  }

  return {
    getAllCarts,
    getAllProducts,
    addCart,
    deleteCart,
  }
};