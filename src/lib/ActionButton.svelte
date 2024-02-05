<script lang="ts">
  export let icon: string
  export let alt: string
</script>

<button on:click class="border-0 bg-[unset] p-[unset] size-6 cursor-pointer">
  <img src={icon} {alt} />
</button>
