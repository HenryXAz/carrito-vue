import { CartItem } from "../../dto/CartItem";
import { Product } from "../../dto/Product";

export type State = {
  products: Product[];
  cart: CartItem[];
}