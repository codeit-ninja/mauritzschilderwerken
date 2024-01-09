<script lang="ts">    
    import '../scss/bootstrap.scss';
    import '../scss/app.scss';
    
    import { onMount } from 'svelte';

    onMount( async () => {
        await import('bootstrap')
    })
</script>

<slot />