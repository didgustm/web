<script>
    import { onMount } from "svelte"
    import { fade } from "svelte/transition"

    export let detailItem

    let loading = false;
    onMount(() => {
        const viewImg = new Image();
        viewImg.src = detailItem.view;
        loading = true;

        viewImg.onload = () => {
            setTimeout(() => {
                loading = false;
            }, 400);
        };
    })
</script>

<div class="img"><img src="{ detailItem.view }" alt=""></div>
{ #if loading }
<div class="loading" out:fade={{duration:400}}>
    <svg width="80px" height="80px" viewBox="0 0 80 80">
        <path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path>
    </svg>
</div>
{ /if }