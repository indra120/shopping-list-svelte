<script>
  import { onMount, afterUpdate } from "svelte"
  import { shoppingList } from "./store"
  import Header from "@/lib/Header.svelte"
  import AddShoppingItem from "@/lib/AddShoppingItem.svelte"
  import Info from "@/lib/Info.svelte"
  import ShoppingLists from "@/lib/ShoppingLists.svelte"

  onMount(() => {
    const savedItems = JSON.parse(localStorage.getItem("shopping-list") || "")
    if (savedItems) shoppingList.set(savedItems)
  })

  afterUpdate(() => {
    localStorage.setItem("shopping-list", JSON.stringify($shoppingList))
  })
</script>

<Header />

<section class="flex flex-col h-[540px] max-w-[480px] p-4 my-6 mx-auto bg-gray-100 rounded-xl shadow-md">
  <AddShoppingItem />
  <Info />

  {#if $shoppingList.length > 0}
    <ShoppingLists />
  {:else}
    <div class="size-full flex justify-center items-center text-base font-semibold">
      There is nothing in here...
    </div>
  {/if}
</section>