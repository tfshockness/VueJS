<template>
    <div>

        <div class="has-text-centered">
            <h1 class="title">Quiz Result</h1>
            <h2 class="subtitle">Your score was: {{percentage}}%</h2>
        </div>

        <div v-for="q in store.questions">
            <div class="question-box">
                <article class="message" :class="[{'is-danger' : !q.isCorrect }, 'is-success']">
                    <div class="message-header">
                        <h1 class="title has-text-centered">{{q.question}}</h1>
                    </div>

                    <div class="message-body">
                        <div v-show="!q.isCorrect">
                            <p>Your answer was {{q.picked}}</p>
                            <hr>
                        </div>


                        <p v-for="o in q.options" :class="[{'strong' : o.option === q.answer}, '']">{{o.text}}</p>
                        <div class="see-explanation">
                            <hr>
                            <p>{{ q.explanation }}</p>
                        </div>
                    </div>



                </article>
            </div>

        </div>
        <div class="try is-pulled-right">
            <a class="button is-primary is-outlined" @click="reset()">Try Again</a>
        </div>

    </div>
</template>

<script>
    import { store } from '../data/store';

    export default {
        data(){
            return{
                store,
                show: false
            }
        },
        computed:{
            percentage(){
                let correct = 0;
                self = this;
                for(let i = 0; i <= self.store.questions.length - 1; i++){
                    if(self.store.questions[i].isCorrect){
                        correct++
                    }
                }
                return (correct*100/store.questions.length);
            }
        },
        methods:{
            reset(){
                console.log('reset running');
                this.store.i = 0;
                this.$emit('finish');
            }
        }
    }
</script>

<style>
    .strong{
        font-weight: bold;
    }
    .try {
        margin-top: 20px;
    }
</style>