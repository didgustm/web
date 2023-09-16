<script>
    import "@scss/worklist/style.scss"
    import Top from "./Top.svelte"
    import List from "./List.svelte";

    export let Saos, sites, items, sort, sortBox, detailShow, deviceWidth
</script>

<section class="worklist">
    <Top { Saos } { sort } { sortBox } />
    <List { sites } { items } { detailShow } { deviceWidth } />
</section>