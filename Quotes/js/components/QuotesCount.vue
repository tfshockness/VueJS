<template>
    <div class="row" style="margin-top: 20px;">
        <h2>Quotes Added:</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (this.quotes.length / max) * 100 + '%'}">
                {{ quotes.length }} / {{ max }}
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['quotes', 'max'],
        data(){
            return {

            };
        },

        methods: {
            calcQuotes(){
                return (this.quotes.length / max) * 100; 
            }
        }


    }
</script>