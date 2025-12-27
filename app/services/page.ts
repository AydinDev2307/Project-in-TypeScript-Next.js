import { API } from "../API/api"
import { IProductsResponse } from "../types/page"

export const getProducts = async () => {
  const res = await API.get<IProductsResponse>('/products');
  return res.data.products;
};