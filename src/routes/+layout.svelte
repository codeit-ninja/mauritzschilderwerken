<script lang="ts">    
    import 'material-symbols';

    import '../scss/bootstrap.scss';
    import '../scss/app.scss';
    
    import { onMount } from 'svelte';

    onMount( async () => {
        await import('bootstrap')
    })
</script>

<slot />