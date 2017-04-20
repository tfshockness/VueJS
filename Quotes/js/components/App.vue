<template>
    <div>
        <app-count :quotes="quotes" :max="maxQuotes"></app-count>
        <app-form></app-form>
        <div class="row">
            <app-list v-for="(quote, index) in quotes" key="index" @click.native="deleteQuote(index)"> {{ quote }} </app-list>
        </div>
        
        <div class="row">
            <div class="alert alert-info" role="alert">
                <p class="text-center">Click on a quote to delete it!</p>
            </div>
        </div>
    </div>
</template>


<script>
import {eventBus} from '../app.js';

import form from './QuoteForm';
import count from './QuotesCount';
import list from './QuotesList';


export default {
    data(){
        return {
            quotes: ['Write a beautiful quote!'],
            maxQuotes: 10
        };
    },

    methods: {
        addQuotes(quote){
            if(this.quotes.length >= 10){
                alert('Quote list is full. Delete a quote.');
            }else{
                this.quotes.push(quote);
            }
            
        },
        deleteQuote(index){
            this.quotes.splice(index, 1);
        }
    },

    created() {
        let self = this;
        eventBus.$on('newQuote', self.addQuotes);
    },

    components: {
        'app-form': form,
        'app-count': count,
        'app-list': list
    }
}
</script>

