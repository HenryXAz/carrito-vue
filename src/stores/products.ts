import { Product } from '../dto/Product'
import { defineStore } from 'pinia'
import { reactive } from 'vue';
import { State } from '../composables/products/State'
import { CartItem } from '../dto/CartItem';

const cart = (localStorage.cart)
  ? reactive<CartItem[]>(JSON.parse(localStorage.cart))
  : reactive<CartItem[]>([])


export const useProductStore = defineStore('products', {
  state: (): State => ({
    products: reactive<Product[]>([]),
    cart,
  }),
  actions: {
    async loadProductsPinia(products: Product[]): Promise<void> {
      this.products = [...products]
    },
    addProductToCart(product: Product): void {
      const productFound: CartItem | undefined = this.cart.find(cartItem => cartItem.id === product.id)

      if(productFound) {
        productFound.quantity = Number(productFound.quantity) + 1
        productFound.total = Number((Number(productFound.total) + Number(productFound.sale_price)).toFixed(2))
      } else {
        const cartItem: CartItem = {...product, quantity: 1, total: product.sale_price}
        this.cart.unshift(cartItem)
      }
    },
    removeProductToCart(product: Product): void {
      const productIndex: number = this.cart.findIndex(cartItem => cartItem.id === product.id)
      
      const productFound: CartItem | undefined = this.cart[productIndex]

      if(productFound) {
        productFound.quantity = Number(productFound.quantity) - 1 
        productFound.total = Number((Number(productFound.total) - Number(productFound.sale_price)).toFixed(2))
      }

      if(productFound.quantity === 0) {
        this.cart.splice(productIndex, 1)
      }
    },
    resetProductCart(): void {
      this.cart = []
    }
  },
  getters: {
    getProducts: (state):Product[] => state.products,
    total: (state):number => state.cart.reduce((acc, cartItem) => acc+=cartItem.total, 0)
  }
})