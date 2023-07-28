import { ProductAdaptable } from "./ProductAdaptable";
import { useProductsAdapter } from "./useProductsAdapter";
import { useProductsPinia } from "./useProductsPinia";


export const useProducts = async(): Promise<ProductAdaptable> => {
  const product: ProductAdaptable = await useProductsPinia()
  return await useProductsAdapter(product)
}