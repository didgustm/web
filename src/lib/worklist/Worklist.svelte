<script>
    import "@scss/worklist/style.scss"
    import Top from "./Top.svelte"
    import List from "./List.svelte";

    export let Saos, sites, items
</script>

<section class="worklist">
    <Top { Saos } />
    <List { sites } { items } />
</section>