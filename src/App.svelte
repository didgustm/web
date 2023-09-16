<script>
    import Lenis from "@studio-freight/lenis"
    import Saos from "saos"
    import { sites } from "@js/worklist"
    import { setLayout } from "@js/setLayout"
    import { setBoxGrid } from "@js/setBoxGrid"
    import Worklist from "./lib/worklist/Worklist.svelte"
    import Detail from "./lib/detail/Detail.svelte";

    let deviceWidth, items = [], beforeItems = [], afterItems = [], newItems = [],
        detailItem, visible = false;
    $: sort = 0;

    const lenis = new Lenis();
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);

    function layout(){
        setLayout(items);
        setBoxGrid(items, 0)
    }

    function sortBox(sort){
        if(sort != 0){
            // newItems = items;
            beforeItems = items.filter(ele => ele.dataset.sort == sort);
            afterItems = items.filter(ele => ele.dataset.sort != sort);
            //newItems = beforeItems.concat(afterItems);
            setBoxGrid(beforeItems, afterItems, 0.5);
            setLayout(beforeItems);
        } else{
            setBoxGrid(items, '', 0.5);
            setLayout(items)
        }
    }

    function detailShow(item){
        detailItem = item;
        visible = true;
        lenis.stop()
    }

    function detailHide(){
        visible = false;
        lenis.start()
    }

</script>

<svelte:window
    bind:innerWidth={deviceWidth}
    on:load={layout}
    on:resize={layout}
/>
<main>
    <Worklist { Saos } { sites } { items } { sort } { sortBox } { detailShow } { deviceWidth } />
</main>
{ #if visible }
<Detail { detailItem } { detailHide } { deviceWidth } />
{ /if }

<style>
@keyframes -global-from-bottom{
    from{
        transform:translateY(100%)
    }
    to{
        transform:translateY(0)
    }
}

@keyframes -global-from-bottom-fade{
    from{
        transform:translateY(50px);
        opacity:0
    }
    to{
        transform:translateY(0);
        opacity:1
    }
}
</style>