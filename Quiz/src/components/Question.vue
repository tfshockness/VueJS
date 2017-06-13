<template>
    <div class="question-box">
        <article class="message">
            <div class="message-body">
                <h1 class="title">{{store.questions[store.getI()].question}}</h1>
                <hr>
                <div>
                    <div class="field">
                        <p class="control">
                            <label class="radio">
                                <input type="radio" name="question" value="a" v-model="store.questions[store.getI()].picked">
                                {{store.questions[store.getI()].options[0].text}}
                            </label>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control">
                            <label class="radio">
                                <input type="radio" name="question" value="b" v-model="store.questions[store.getI()].picked">
                                {{store.questions[store.getI()].options[1].text}}
                            </label>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control">
                            <label class="radio">
                                <input type="radio" name="question" value="c" v-model="store.questions[store.getI()].picked">
                                {{store.questions[store.getI()].options[2].text}}
                            </label>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control">
                            <label class="radio">
                                <input type="radio" name="question" value="d" v-model="store.questions[store.getI()].picked">
                                {{store.questions[store.getI()].options[3].text}}
                            </label>
                        </p>
                    </div>
                </div>
                <div class="block previous-next" style="overflow: auto">
                    <button class="button is-danger is-outlined" @click="goPrevious()" v-if="!(store.getI() === 0)">Previous</button>
                    <button class="button is-success is-outlined is-pulled-right" @click="goNext()" ref="btnNext">Next</button>

                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import { store } from '../data/store';
    export default {
        data(){
            return{
                store: store
            }
        },
        methods:{
            goNext(){
                if(this.store.questions[store.getI()].picked === this.store.questions[store.getI()].answer){
                    this.store.questions[store.getI()].isCorrect = true;

                }

                if(this.store.questions.length > (store.getI()+1)){
                    this.store.incrementI();
                    this.checkLenght();

                }else{
                    this.finishQuiz();
                }


            },
            goPrevious(){
                if(store.getI() > 0){
                    this.store.decrementI();
                    this.checkLenght();
                }
            },
            finishQuiz(){
                this.$emit('callend');
            },
            checkLenght(){
                if((store.getI()+1) === this.store.questions.length){
                    this.$refs.btnNext.innerText = 'Finish';

                }else{
                    this.$refs.btnNext.innerText = 'Next';
                }
            }
        }
    }
</script>

<style>
    .question-box{
        margin-top: 20px;
    }
    .previous-next{
        margin-top: 40px;
    }
</style>