<template>
  <div class="main">
    <component :is="selectedComponent" @finish="changeComponent"></component>
  </div>
</template>

<script>
    import Quiz from './Quiz.vue';
    import Result from './Result.vue';

export default {
    data(){
        return {
            selectedComponent: 'app-quiz'
        }
    },
    components: {
        'app-quiz': Quiz,
        'app-result': Result
    },
    methods: {
        changeComponent(){
            if(this.selectedComponent === 'app-quiz'){
                this.selectedComponent = 'app-result';
            }else{
                this.selectedComponent = 'app-quiz';
            }

        }
    }
}
</script>

<style>
  .main{
    margin: 100px 100px 100px 100px ;
  }
</style>
