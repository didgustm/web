<script>
    export let Saos
</script>

<nav class="menus">
    <svelte:component this={Saos} animation={"from-bottom-fade 0.8s ease"} once={true} top={100}>
    <button type="button">Type01</button>
    <button type="button">Type02</button>
    <button type="button">Type03</button>
    <button type="button">Type04</button>
    <button type="button">Type05</button>
    <button type="button">ETC</button>
    </svelte:component>
</nav>