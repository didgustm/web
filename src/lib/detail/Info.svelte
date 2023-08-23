<script>
    export let detailItem
</script>

<div class="info">
    <dl>
        <dt>Url:</dt>
        <dd>
            <a href="{ detailItem.url }" target="_blank">{ detailItem.url }</a>
        </dd>
    </dl>
    <dl>
        <dt>Category:</dt>
        <dd>
            { #if detailItem.category == 1 }
            Life
            { :else if detailItem.category == 2 }
            Car
            { :else if detailItem.category == 3 }
            Stock
            { :else if detailItem.category == 4 }
            IT/WEB
            { :else }
            Etc
            { /if }
        </dd>
    </dl>
    <dl>
        <dt>Device:</dt>
        <dd>{ detailItem.device }</dd>
    </dl>
</div>