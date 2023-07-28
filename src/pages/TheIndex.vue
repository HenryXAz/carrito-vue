<template>
  <div class="flex justify-start max-w-6x">
    <toggle-theme />
  </div>
  <div>
    <h1 class="my-5 text-xl sm:text-4xl font-light">Productos</h1> 
    <Suspense>
    <products />

    <template #fallback>
      <products-skeleton />
    </template>
  </Suspense>

  <Suspense >
    <shopping-cart />
  </Suspense>


  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import ToggleTheme from '../components/ToggleTheme.vue'
const Products = defineAsyncComponent(() => import('../components/Products.vue'))
const ProductsSkeleton = defineAsyncComponent(() => import('../components/ProductsSkeleton.vue'))
const ShoppingCart = defineAsyncComponent(() => import('../components/ShoppingCart.vue'))
</script>