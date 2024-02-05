<script lang="ts">
  import { shoppingList } from "@/store"
  import ActionButton from "./ActionButton.svelte"
  import plusIcon from "@/assets/plus-icon.svg"
  import minusIcon from "@/assets/minus-icon.svg"

  $: lastItem = "border-b border-gray-100"

  const increment = (i: number) => () => {
    shoppingList.update((list) => {
      list[i].count++
      return list
    })
  }

  const decrement = (i: number) => () => {
    shoppingList.update((list) => {
      if (list[i].count > 0) {
        list[i].count--
      } else {
        list.splice(i, 1)
      }
      return list
    })
  }
</script>

<section
  class="shadow overflow-x-hidden overflow-y-auto rounded-2xl max-h-[640px]"
>
  {#each $shoppingList as item, i (i)}
    <div
      class="flex justify-between items-center h-14 py-3 px-4 bg-white text-gray-700 text-base font-semibold {$shoppingList.length ===
        i + 1 && lastItem}"
    >
      {item.title}
      <div class="flex items-center justify-between w-32">
        <div
          class="flex justify-center items-center w-8 h-6 rounded text-indigo-500 bg-gray-100 shadow-md"
        >
          {item.count}
        </div>

        <ActionButton
          on:click={decrement(i)}
          icon={minusIcon}
          alt="minus icon"
        />
        <ActionButton on:click={increment(i)} icon={plusIcon} alt="plus icon" />
      </div>
    </div>
  {/each}
</section>
