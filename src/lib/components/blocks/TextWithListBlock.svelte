<script lang="ts">
    import type { block_text_with_list, buttons } from '$directus';
    import Markdown from 'svelte-markdown'
    import Button from './partials/Button.svelte';

    type Block = Omit<block_text_with_list, 'button'> & {
        button: buttons;
        listItems: { title: string; text: string }[]
    }

    export let block: Block;
</script>

<div class="block block--text--with--list">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="block--text--with--list--text">
                    {@html block.text}

                    {#if block.showButton}
                        <div class="mt-4">
                            <Button button={block.button} />
                        </div>
                    {/if}
                </div>
            </div>
            <div class="col-md-5">
                {#each block.listItems as item}
                    <div class="block--text--with--list--item">
                        <h6>— {item.title}</h6>
                        <Markdown source={item.text.replaceAll('\n', '<br>')} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>