<template>
  <h2 class="mt-5 mb-2 font-light text-2xl">Carrito de compras</h2>

  <div
    v-if="cart.length > 0"
    class="max-w-6xl bg-white rounded-md shadow-xl dark:shadow-none dark:bg-zinc-800 my-5 mx-auto overflow-y-auto"
  >
    <table class="w-full border-collapse">
      <thead class="border-b border-b-gray-600">
        <tr>
          <th class="p-4 text-left">Producto</th>
          <th class="p-4 text-left">Cantidad</th>
          <th class="p-4 text-left">Acciones</th>
          <th class="p-4 text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart" :key="product.id">
          <td class="p-4">{{ product.title }}</td>
          <td class="p-4">{{ product.quantity }}</td>
          <td class="p-4">
            <div class="flex gap-2">
              <button
                @click="removeProductToCart(product)"
                class="rounded-md bg-red-500 p-2 text-gray-200"
              >
                -
              </button>
              <button
                @click="addProductToCart(product)"
                class="rounded-md bg-emerald-500 p-2 text-gray-200"
              >
                +
              </button>
            </div>
          </td>
          <td class="p-4">Q. {{ product.total }}</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-end w-full my-5">
      <button
        @click="resetProductCart()"
        class="rounded-md border border-gray-400 dark:border-gray-600 p-2 bg-transparent"
      >
        vaciar 🛒
      </button>
      <p class="px-5">Total Q. {{ total }}</p>
    </div>
  </div>

  <div
    v-else
    class="w-full sm:w-1/2 mx-auto my-5 p-5 border-b dark:border-gray-600 border-gray-400 rounded-md"
  >
    <p class="text-center font-light text-2xl">🛒 Carrito Vacío</p>
  </div>
</template>

<script setup lang="ts">
import { ProductAdaptable } from "../composables/products/ProductAdaptable";
import { useProducts } from "../composables/products/useProducts";

const {
  addProductToCart,
  removeProductToCart,
  resetProductCart,
  cart,
  total,
}: ProductAdaptable = await useProducts();
</script>

