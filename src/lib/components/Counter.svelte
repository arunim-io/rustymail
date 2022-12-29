<script lang="ts">
  import { writable } from 'svelte/store';

  const counter = writable(0);
</script>

<button class="btn btn-filled-primary" on:click={() => $counter++}>
  Count is {$counter}
</button>
