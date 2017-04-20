<template>
    <div class="row">
        <form>
            <div class="col-md-8 col-md-offset-2 form-group">
                <label for="quotes" class="control-label">Write a quote</label>
            </div>
            <div class="col-md-8 col-md-offset-2 form-group">
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-md-8 col-md-offset-2 form-group">
                <button class="btn btn-primary" @click.prevent="addNewQuote">Add Quote</button>
            </div>
        </form>
    </div>
    
</template>

<script>
    import {eventBus} from '../app.js';

    export default {
        data(){
            return {
                quote: ''
            };
        },
        
        methods: {
            addNewQuote(){
                let self = this;
                eventBus.$emit('newQuote', self.quote);
                self.quote = '';
            }
        }

    }
</script>