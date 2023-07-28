<template>
  <div
    class="max-w-6xl items-center justify-center flex flex-wrap gap-2 mx-auto"
  >
    <product
      v-for="product in products"
      :product="product"
      :key="product.id"
      @add-product="addProductToCart"
    />
  </div>
</template>

<script setup lang="ts">
import { useProducts } from "../composables/products/useProducts";
import { ProductAdaptable } from "../composables/products/ProductAdaptable";
import Product from "./Product.vue";

const { loadProducts, addProductToCart, products }: ProductAdaptable =
  await useProducts();

await loadProducts();
</script>