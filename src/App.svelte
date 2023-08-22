<script>
    import Lenis from "@studio-freight/lenis"
    import Saos from "saos"
    import { sites } from "@js/worklist"
    import { setLayout } from "@js/setLayout"
    import { setBoxGrid } from "@js/setBoxGrid"
    import Visual from "./lib/visual/Visual.svelte"
    import Worklist from "./lib/worklist/Worklist.svelte";

    let w,
        items = [];

    const lenis = new Lenis();
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
</script>

<svelte:window
    on:load={ () => {
        //w = document.documentElement.clientWidth;
        setLayout();
        setBoxGrid(items, 0)
    } }
/>
<main>
    <Visual />
    <Worklist { Saos } { sites } { items } />
</main>

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