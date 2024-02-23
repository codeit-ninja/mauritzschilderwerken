<script lang="ts">
    import Logo from '$lib/components/blocks/partials/Logo.svelte';
</script>

<div class="site--header text-white">
    <div class="container">
        <div class="site--navbar">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <a href="/" class="d-flex gap-3 align-items-center text-white site--link">
                        <span class="material-symbols-outlined">
                            west
                        </span>
                        Terug naar website
                    </a>
                </div>
                <div>
                    <Logo />
                </div>
                <div>
                    <button class="btn btn-outline-light btn-sm">Offerte</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="site--content">
    <slot />
</div>