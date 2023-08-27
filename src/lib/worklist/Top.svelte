<script>
    export let Saos, sort, sortBox

    const menuList = ["Sort", "Life", "Car", "Stock", "IT/WEB", "Etc"]
</script>

<div class="top">
    <div class="txt">
        <span class="circle"></span>
        <h2 class="title">
            <div>
                <svelte:component this={Saos} animation={"from-bottom 0.8s ease"} once={true} top={100}>
                <p>Web</p>
                </svelte:component>
            </div>
            <div>
                <svelte:component this={Saos} animation={"from-bottom 0.8s ease"} once={true} top={100}>
                <p>Publisher</p>
                </svelte:component>
            </div>
            <div>
                <svelte:component this={Saos} animation={"from-bottom 0.8s ease"} once={true} top={100}>
                <p>Portfolio</p>
                </svelte:component>
            </div>
        </h2>
        <div class="caption">
            PC, Mobile, Reponsive Website
        </div>
    </div>
    <div class="select">
        <select
            bind:value={ sort }
            on:change={ sortBox(sort) }
        >
            { #each menuList as menu, idx }
                { #if idx == 0 }
                <option value="{ 0 }" selected disabled>{ menu }</option>
                { :else }
                <option value="{ idx }">{ menu }</option>
                { /if }
            { /each }
        </select>
    </div>
</div>