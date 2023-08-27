<script>
    import Box from "./Box.svelte"

    export let sites, items, detailShow
</script>

<div class="list">
    { #each sites as site, idx }
    <Box { site } { idx } { items } { detailShow } />
    { /each }
</div>