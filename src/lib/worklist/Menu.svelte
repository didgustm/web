<script>
    export let Saos, sortBox

    const menuList = ["Life", "Car", "Stock", "IT/WEB", "Etc"]
</script>

<nav class="menus">
    <svelte:component this={Saos} animation={"from-bottom-fade 0.8s ease"} once={true} top={100}>
    { #each menuList as menu, idx }
    <button 
        type="button"
        on:click={sortBox(idx+1)}
    >
        {menu}
    </button>
    { /each }
    </svelte:component>
</nav>