<script>
    import Box from "./Box.svelte"

    export let sites, items, detailShow
</script>

<div class="list">
    { #each sites as site }
    <Box { site } { items } { detailShow } />
    { /each }
</div>