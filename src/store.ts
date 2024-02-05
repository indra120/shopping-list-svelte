import { writable } from "svelte/store"

export interface ShoppingItem {
  title: string
  count: number
}

export const shoppingList = writable<ShoppingItem[]>([
  { title: "Susu ultra", count: 1 },
  { title: "Tahu sumedang", count: 1 },
  { title: "Semangka", count: 1 },
])
