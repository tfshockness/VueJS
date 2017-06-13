<template>
    <div class="box">
        <h4 class="has-text-centered">{{store.getI() + 1 }}/{{store.questions.length}}</h4>
        <progress class="progress is-primary" :value="value" :max="total"></progress>
    </div>
</template>

<script>
    import { store } from '../data/store';

    export default {
        data(){
            return{
                store: store,
                total: store.questions.length
            }
        },
        computed:{
            value: function(){
                return this.store.getI() + 1;
            }
        }
    }
</script>

<style>
</style>