<script>
  import { shoppingList } from "./store"
  import Navbar from "@/lib/Navbar.svelte"
  import ShoppingLists from "@/lib/ShoppingLists.svelte"
</script>

<Navbar />

<section
  class="flex flex-col h-[540px] max-w-[480px] p-4 my-6 mx-auto bg-gray-100 rounded-xl shadow-md"
>
  {#if $shoppingList.length > 0}
    <ShoppingLists />
  {:else}
    <div
      class="size-full flex justify-center items-center text-base font-semibold"
    >
      There is nothing in here...
    </div>
  {/if}
</section>
