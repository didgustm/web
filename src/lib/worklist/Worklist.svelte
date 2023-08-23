<script>
    import "@scss/worklist/style.scss"
    import Top from "./Top.svelte"
    import Menu from "./Menu.svelte";
    import List from "./List.svelte";

    export let Saos, sites, items, sortBox, detailShow
</script>

<section class="worklist">
    <Top { Saos } />
    <Menu {Saos} { sortBox } />
    <List { sites } { items } { detailShow } />
</section>