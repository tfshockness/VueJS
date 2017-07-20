<template>
    <div class="each-card">
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-media :src="url" height="300px">
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{info.title}}</h3>
                        <span class="grey--text">By {{info.author}} - </span><br>
                        <div>{{info.description}}</div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <a :href="link" target="_blank">
                    <v-btn flat class="blue--text">Read More</v-btn>
                    </a>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['info'],
        computed:{
            url(){
                return this.info.urlToImage;
            },
            link(){
                return this.info.url
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .each-card{
        width: 30%;
        margin-bottom:20px;
        display:inline-block;
        margin-left: 5px;
        margin-right:5px;
    }
</style>