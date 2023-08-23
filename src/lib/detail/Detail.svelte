<script>
    import "@scss/detail/style.scss"
    import Top from "./Top.svelte"
    import Info from "./Info.svelte"
    import { fly } from "svelte/transition"

    export let detailItem, detailHide
</script>

<div 
    class="detail"
    data-lenis-prevent
    in:fly={{ y:window.innerHeight, opacity:1, duration:700 }}
    out:fly={{ y:window.innerHeight, opacity:1, duration:700 }}
>
    <div class="inner">
        <div class="img"><img src="" alt=""></div>
        <div class="txt">
            <div class="contents">
                <Top { detailItem } { detailHide } />
                <Info { detailItem } />
            </div>
        </div>
    </div>
</div>