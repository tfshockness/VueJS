<template>
    <div>
        <app-bar></app-bar>
        <app-question @callend="calling"></app-question>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar.vue';
    import Question from './Question.vue';
    export default {
        components: {
            'app-bar': ProgressBar,
            'app-question': Question
        },
        methods:{
            calling(){
                this.$emit('finish');
            }
        }
    }
</script>

<style>
</style>