<script lang="ts">
    import Logo from '$lib/components/blocks/partials/Logo.svelte';
</script>

<div class="site--header text-white">
    <div class="container">
        <div class="site--navbar">
            <div class="row align-items-center">
                <div class="col-6 col-lg-4">
                    <a href="/" class="d-flex gap-3 align-items-center text-white site--link">
                        <span class="material-symbols-outlined">
                            west
                        </span>
                        Terug naar website
                    </a>
                </div>
                <div class="col-6 col-lg-4 text-end text-lg-center">
                    <Logo />
                </div>
            </div>
        </div>
    </div>
</div>

<div class="site--content mb-5">
    <slot />
</div>