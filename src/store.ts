import { writable } from "svelte/store"

export interface ShoppingItem {
  title: string
  count: number
}

export const shoppingList = writable<ShoppingItem[]>([])