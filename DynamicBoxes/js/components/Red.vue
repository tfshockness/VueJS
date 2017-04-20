<template>
    <div>
        <h1>Guess what? This is my Red Box!</h1>
        <p>Always when a component is switched, the previous component is destroyed and the following component is created.
            To avoid this behaviour its necessary wrap the components tag between a keep-alive tag.
        </p>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>