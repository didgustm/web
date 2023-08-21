<script>
    import { onMount } from "svelte"
    import { register } from "swiper/element/bundle"
    import Item from "./Item.svelte"

    export let visuals;

    register();

    let swiperEl,
    params = {
        effect: "fade",
        speed: 800,
        loop: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: true
        },
        pagination: {
            bulletActiveClass: "active",
            bulletElement: "button",
            clickable: true
        }
    };

    onMount(() => {
        Object.assign(swiperEl, params);
        swiperEl.initialize();
    })
</script>

<swiper-container 
    init="false" 
    bind:this={swiperEl}
>
    { #each visuals as visual }
    <Item { visual } />
    { /each }
</swiper-container>