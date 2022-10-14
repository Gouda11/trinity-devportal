<script>

export let data;
console.log(data)
</script>
{#each data.taluk as item}
<h1>{item.name}</h1>
   <!-- content here -->
{/each}
