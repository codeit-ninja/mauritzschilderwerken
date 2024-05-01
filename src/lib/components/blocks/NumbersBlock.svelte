<script lang="ts">
    import type { block_numbers } from '$directus';

    type Block = Omit<block_numbers, 'numbers'> & {
        numbers: {
            number: number;
            description: string;
            addPlusSymbol: boolean;
        }[]
    }

    export let block: Block;
</script>
<div class="block block--numbers">
    <div class="container">
        <div class="block--numbers--wrapper">
            {#each block.numbers as item}
                <div>
                    <span class="d-block fs-1 fw-medium">{ item.number }{ item.addPlusSymbol ? '+' : '' }</span>
                    <span class="d-block mt-2">{ item.description }</span>
                </div>
            {/each}
        </div>
    </div>
</div>