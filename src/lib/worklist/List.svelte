<script>
    import Box from "./Box.svelte"

    export let sites, items
</script>

<div class="list">
    { #each sites as site }
    <Box { site } { items } />
    { /each }
</div>