<script>
    import Siteinfo from "./Siteinfo.svelte"
    import Images from "./Images.svelte"

    export let visual
</script>

<swiper-slide>
    <div class="item {`item${visual.id}`}">
        <div class="bg"></div>
        <div class="content">
            <Siteinfo { visual } />
            <Images />
        </div>
    </div>
</swiper-slide>