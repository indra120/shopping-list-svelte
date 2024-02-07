<script lang="ts">
  import { shoppingList } from "@/store"

  $: totalCounts = $shoppingList.reduce((total, item) => total + item.count, 0)
</script>

<div class="flex justify-between items-center w-full py-4 px-0">
  <div class="flex justify-center items-center text-gray-700 text-xs">
    <p class="font-bold">Total List: {$shoppingList.length}</p>
  </div>

  <div class="flex justify-center items-center text-gray-700 text-xs">
    <p class="font-bold">Total Counts: {totalCounts}</p>
  </div>

  <button on:click={() => shoppingList.set([])} class="bg-[none] border-0 p-0 text-red-500 text-xs font-bold cursor-pointer">
    Delete All Items
  </button>
</div>