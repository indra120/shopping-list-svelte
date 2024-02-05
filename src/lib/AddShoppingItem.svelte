<script lang="ts">
  import { shoppingList } from "@/store"

  let title: string

  const handleSubmit = () => {
    if (!title) return alert("No title provided!")
    shoppingList.update((lists) => {
      lists.unshift({ title, count: 0 })
      return lists
    })
    title = ""
  }
</script>

<form class="flex" on:submit|preventDefault={handleSubmit}>
  <input
    class="flex-1 mr-2 shadow border-0 rounded-full p-3 text-gray-700 text-base font-semibold outline-0"
    bind:value={title}
    type="text"
    placeholder="List"
  />
  <button
    class="border-0 rounded-full text-slate-50 text-base font-bold uppercase w-20 bg-indigo-400 shadow cursor-pointer"
    type="submit"
  >
    add
  </button>
</form>
