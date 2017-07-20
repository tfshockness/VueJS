<template>
    <div class="footer">
        <div class="paragraph">
            <p>To create my "News app" I used <a href="https://newsapi.org/" target="_blank">newsapi.org</a> as my data source for populate the news.</p>
            <p>The design was create using <a href="https://vuetifyjs.com/" target="_blank">vuetifyjs.com</a></p>
            <p>For handle the HTTP request and response I used <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a>  </p>
        </div>

    </div>
</template>

<script>
    export default {}
</script>

<style>
    .footer{
        background-color: #263238;
        color: white;
        height: 120px;

    }
    .paragraph{
        display:inline-block;
        width: 100%;
        text-align: center;
    }
    .footer p {
        font-size: 14px;
        font-weight: bold;

    }
    .footer a{
        text-decoration: none;
        color: #cccccc
    }
</style>