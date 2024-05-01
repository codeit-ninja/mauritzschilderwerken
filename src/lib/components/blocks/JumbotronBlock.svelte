<script lang="ts">
    import type { block_jumbotron } from '$directus';
    import { onDestroy } from 'svelte';
    import viewport from '$lib/viewport';

    export let block: block_jumbotron;

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
    class="block block--jumbotron block--jumbotron--{block.variant} rounded-4"
    class:block--negative--margin={block.applyNegativeMargin}
    class:shape={block.showBackgroundShape}
    use:viewport
    on:viewportEnter={onViewportEnter}
    on:viewportExit={onViewportExit}
>
    <div class="container">
        <div class="block--jumbotron--content">
            {#if block.title}
                <h6 class="mb-5">{ block.title }</h6>
            {/if}
            <p class="fw-bold">
                {#each chars as char, i}
                    <span bind:this={elements[i]} style="opacity: .3;">{ char }</span>
                {/each}
            </p>
        </div>
    </div>
</div>