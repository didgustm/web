<script>
    import Siteinfo from "./Siteinfo.svelte"
    import Images from "./Images.svelte"

    export let visual
    let imgs = {
        pc: visual.pc,
        m: visual.m
    }
</script>

<swiper-slide key={visual.id}>
    <div class="item {`item${visual.id}`}">
        <div class="bg"><img src="{ visual.bg }" alt=""></div>
        <div class="content">
            <Siteinfo { visual } />
            <Images { imgs } />
        </div>
    </div>
</swiper-slide>