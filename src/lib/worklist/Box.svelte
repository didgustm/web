<script>
    import { boxMouseOver } from "@js/boxMouseOver"
    import Card from "./Card.svelte"

    export let site, idx, items, detailShow
</script>

<div 
    class="box {`box${idx+1}`}"
    data-sort="{site.category}"
    bind:this={items[idx]}
    on:mouseenter={ e => boxMouseOver(e, 'enter') } 
    on:mouseleave={ e => boxMouseOver(e, 'leave') }
>
    <button 
        type="button"
        on:click={detailShow(site)}
    >
        <div class="thumnail">
            <img src="{ site.cover }" alt="">
        </div>
        <Card { site } />
    </button>
</div>