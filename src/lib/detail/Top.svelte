<script>
    import close from "@images/common/close.png"
    import enter from "@images/common/enter.png"

    export let detailItem, detailHide, deviceWidth
</script>

<div class="top">
    <p class="title">{detailItem.title}</p>
    <div class="utils">
        { #if deviceWidth <= 1000 }
        <a href="{ detailItem.url }" class="link" target="_blank">
            <img src="{ enter }" alt="">
        </a>
        { /if }
        <button 
            type="button"
            class="close"
            on:click={detailHide}
        >
            <img src="{ close }" alt="닫기">
        </button>
    </div>
</div>