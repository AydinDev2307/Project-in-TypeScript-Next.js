import { API } from '../API/api';
import { IProducts, IProductsResponse } from '../types/types';

export const getProducts = async () => {
  const res = await API.get<IProductsResponse>('/products');
  return res.data.products;
};

export const getProductsByID = async (id: number) => {
  const response = await API.get<IProducts>(`/products/${id}`);
  return response.data;
};
