<script>
  /**
  * @type {{ taluk: any; }}
  */
  export let data;
  console.log(data)
  const resultLength=data.taluk.resultlength;
  </script>

  <h1 class="grid h-screen place-content-center text-8xl">
    Heading
  </h1>
<h1>login route</h1>
  {#each data.taluk.data as item}
  <h1>{resultLength}-{item.email}</h1>
     <!-- content here -->
  {/each}
