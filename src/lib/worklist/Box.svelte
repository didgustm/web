<script>
    import { boxMouseOver } from "@js/boxMouseOver"
    import Card from "./Card.svelte"

    export let site, items, detailShow
</script>

<div 
    class="box {`box${site.id}`}"
    data-sort="{site.category}"
    bind:this={items[site.id - 1]}
    on:mouseenter={ e => boxMouseOver(e, 'enter') } 
    on:mouseleave={ e => boxMouseOver(e, 'leave') }
>
    <button 
        type="button"
        on:click={detailShow(site)}
    >
        <div class="thumnail"></div>
        <Card { site } />
    </button>
</div>