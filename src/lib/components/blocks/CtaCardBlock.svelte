<script lang="ts">
    import type { BlockCtaCard, BlockNumbers, Buttons } from '$directus';
    import Button from './partials/Button.svelte';
    import Image from './partials/Image.svelte';

    type Block = Omit<BlockCtaCard, 'button'> & {
        button: Buttons;
    }

    export let block: BlockCtaCard;
</script>
<div class="block block--cta--card bg-black text-white rounded-4">
    <div class="container">
        <div class="block--cta--card--wrapper rounded-4">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <Image image={block.image} type="background" />
                </div>
                <div class="col-7">
                    <div class="p-5">
                        <h5>{ block.title }</h5>
                        <p class="lead mt-4 mb-4">{ block.description }</p>
                        <Button button={ block.button } />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>