<script>
    import arrow from "@images/common/arrow_r.png"

    export let site
</script>

<div class="card">
    <div class="info">
        <p class="category bold">
            { #if site.category == 1 }
            LIFE
            { :else if site.category == 2 }
            CAR
            { :else if site.category == 3 }
            STOCK
            { :else if site.category == 4 }
            IT/WEB
            { :else }
            ETC
            { /if }
        </p>
        <p class="name light">{site.title}</p>
    </div>
    <span class="icon">
        <img src="{ arrow }" alt="자세히 보기">
    </span>
</div>