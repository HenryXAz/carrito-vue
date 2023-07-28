import { ComputedRef, Ref } from "vue";
import { CartItem } from "../../dto/CartItem";
import { Product } from "../../dto/Product"

export type ProductAdaptable =  {
  loadProducts: () => Promise<void>;
  addProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
  resetProductCart: () => void;
  products: Ref< Product[]>;
  cart: Ref<CartItem[]>;
  total: ComputedRef<number>;
}