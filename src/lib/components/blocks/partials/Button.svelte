<script lang="ts">
    import type { Buttons } from '$directus';

    export let classes = '';
    export let button: Buttons;

    let outline = '';

    if( button.smallButton ) {
        classes += ' btn-sm'
    }

    if( button.outline ) {
        outline = 'outline-'
    }
</script>

<a role="button" class="btn btn-{outline}{ button.variant } {classes}" href={button.link}>{ button.label }</a>