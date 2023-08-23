<script>
    import close from "@images/common/close.png"

    export let detailItem, detailHide
</script>

<div class="top">
    <p class="title">{detailItem.title}</p>
    <div class="utils">
        <button 
            type="button"
            class="close"
            on:click={detailHide}
        >
            <img src="{ close }" alt="닫기">
        </button>
    </div>
</div>