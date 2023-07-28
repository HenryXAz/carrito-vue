<template>
  <div
      class="w-[180px] flex flex-col gap-2 border h-96 hover:bg-gray-100 dark:hover:bg-zinc-800 bg-white dark:bg-transparent transition-all duration-600 ease-in-out border-gray-300 dark:border-gray-600 rounded-md"
    >
      <div class="h-1/2 w-full rounded-tl-md rounded-tr-md">
        <img
          class="w-full h-full rounded-tl-md rounded-tr-md"
          :src="product.thumbnailUrl"
          alt=""
        />
      </div>
      <div class="p-2 text-xl flex flex-col gap-2">
        <h3>{{ props.product.title }}</h3>

        <p class="font-light">Q. {{ props.product.sale_price }}</p>

        <div class="mt-5 flex justify-end">
          <button
            @click="() => {emits('addProduct', product)}"
            class="rounded-md bg-gray-900 text-gray-200 dark:text-gray-200 p-3 font-light"
          >
            comprar
          </button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Product } from "../dto/Product"

const props = defineProps<{
  product: Product
}>()

const emits = defineEmits<{
  (e: 'addProduct', product: Product): void
}>()
</script>