<script>
    import "@scss/visual/style.scss"
    import Swiper from "./Swiper.svelte"
    import { visuals } from "@js/visual";

</script>

<section class="visual">
    <h2 class="blind">메인 스와이퍼</h2>
    <Swiper { visuals } />
</section>