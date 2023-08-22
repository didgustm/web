<script>
    export let Saos
</script>

<div class="top">
    <h2 class="title">
        <svelte:component this={Saos} animation={"from-bottom 0.8s ease"} once={true} top={100}>
            <p>Title</p>
        </svelte:component>
    </h2>
</div>