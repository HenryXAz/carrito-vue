import { Product } from "../../dto/Product";
import { ProductAdaptable } from "./ProductAdaptable";
import { useProductStore } from "../../stores/products";
import { getProducts as getProductsService } from "../../services/products";
import { storeToRefs } from "pinia";

export const useProductsPinia = async (): Promise<ProductAdaptable> => {
  const store = useProductStore()
  const { loadProductsPinia, addProductToCart, removeProductToCart, resetProductCart } = store
  const { products, cart, total } = storeToRefs(store)

  const loadProducts = async (): Promise<void> => {
    const data: Product[] = await getProductsService()
    await loadProductsPinia(data)
  }

  return { loadProducts, addProductToCart, removeProductToCart, resetProductCart, products, cart, total }
}