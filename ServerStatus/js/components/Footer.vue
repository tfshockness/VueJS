<template>
<div class="row">
    <div class="col-xs-12">
        <footer>
            <p>All Servers are managed here - More information: {{ website }}</p>
        </footer>
    </div>
</div>
</template>

<script>
    export default {
        props: ['website']
    }
</script>