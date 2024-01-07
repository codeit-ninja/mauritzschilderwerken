<script lang="ts">
    import type { BlockJumbotron } from '$directus';
    import { onDestroy } from 'svelte';
    import viewport from '$lib/viewport';

    type Block = Omit<BlockJumbotron, 'text'> & {
        text: string;
    }

    export let block: Block;

    const chars = block.text.split('')
    
    let timeouts: NodeJS.Timeout[] = []
    let elements: HTMLSpanElement[] = []
    
    const onViewportEnter = () => {
        let timeout = 60;

        elements.forEach((span, index) => {
            span.style.opacity = '.3'

            timeouts.push(setTimeout(() => {
                span.style.opacity = '1'
            }, timeout * index))
        })
    }

    const onViewportExit = () => {
        elements.forEach((span) => {
            span.style.opacity = '.3'

            timeouts.forEach( timeout => clearTimeout(timeout) )
        })
    }

    onDestroy(() => {
        timeouts.forEach( timeout => clearTimeout(timeout) )
    })
</script>
<div 
    class="block block--jumbotron rounded-4"
    class:block--negative--margin={block.applyNegativeMargin}
    use:viewport
    on:viewportEnter={onViewportEnter}
    on:viewportExit={onViewportExit}
>
    <div class="container">
        <h6 class="mb-5">{ block.title }</h6>
        <p class="fs-5 fw-bold">
            {#each chars as char, i}
                <span bind:this={elements[i]} style="opacity: .3;">{ char }</span>
            {/each}
        </p>
    </div>
</div>