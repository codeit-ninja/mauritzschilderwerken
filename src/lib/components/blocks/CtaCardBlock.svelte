<script lang="ts">
    import type { block_cta_card, buttons } from '$directus';
    import Button from './partials/Button.svelte';
    import Image from './partials/Image.svelte';

    type Block = Omit<block_cta_card, 'button'> & {
        button: buttons;
    }

    export let block: block_cta_card;
</script>
<div class="block block--cta--card bg-black text-white">
    <div class="container">
        <div class="block--cta--card--wrapper rounded-4">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <Image image={block.image} type="background" />
                </div>
                <div class="col-lg-7">
                    <div class="p-lg-5 py-5 py-lg-0">
                        <h5>{ block.title }</h5>
                        <p class="lead mt-4 mb-4">{ block.description }</p>
                        <Button button={ block.button } />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>