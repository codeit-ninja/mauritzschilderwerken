<script lang="ts">
    import type { BlockJumbotron, BlockJumbotronWithBlocks, Buttons, DirectusFiles } from '$directus';
    import Button from './partials/Button.svelte';
    import Image from './partials/Image.svelte';

    type Block = Omit<BlockJumbotronWithBlocks, 'topBlockButton' | 'bottomRightImage'> & {
        topBlockButton: Buttons;
        bottomRightImage: DirectusFiles;
    }

    export let block: Block;

    console.log(block)
</script>

<div class="block block--jumbotron--with--blocks rounded-4 bg-black py-5">
    <div class="container">
        <div class="block--jumbotron--with--blocks--top--block rounded-4 mb-4">
            <h6 class="mb-5">— { block.topBlockTitle }</h6>
            <span class="d-block fs-3 mb-5">{ block.topBlockText }</span>
            <Button button={block.topBlockButton} />
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="block--jumbotron--with--blocks--bottom--left rounded-4">
                    {@html block.bottomLeftBlockContent }
                </div>
            </div>
            <div class="col-md-6">
                <div class="block--jumbotron--with--blocks--bottom--right rounded-4 h-100 w-100">
                    <Image image={ block.bottomRightImage } type="background" />
                </div>
            </div>
        </div>
    </div>
</div>