import {Product} from '../dto/Product'

export const getProducts = async(): Promise<Product[]> => {
  const response = await fetch("api.json")

  return await response.json()
}