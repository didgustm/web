<script>
    import Box from "./Box.svelte"

    export let sites, items, detailShow, deviceWidth
</script>

<div class="list">
    { #each sites as site, idx }
    <Box { site } { idx } { items } { detailShow } { deviceWidth } />
    { /each }
</div>