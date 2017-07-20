<template>
    <v-toolbar dark class="primary">
        <v-toolbar-title class="white--text">Tech News</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat class="white--text" @click="home">
            Home
        </v-btn>
        <v-btn flat class="white--text" @click="crunch">
            TechCrunch
        </v-btn>
        <v-btn flat class="white--text" @click="nextweb">
            NextWeb
        </v-btn>
        <v-btn flat class="white--text" @click="recode">
            ReCode
        </v-btn>
        <v-btn flat class="white--text" @click="ign">
            IGN
        </v-btn>
    </v-toolbar>
</template>

<script>
    import {newsBus} from '../../main.js'

    export default {
        methods:{
            home(){
                newsBus.$emit('home');
            },
            crunch(){
                newsBus.$emit('crunch');
            },
            nextweb(){
                newsBus.$emit('nextweb');
            },
            recode(){
                newsBus.$emit('recode');
            },
            ign(){
                newsBus.$emit('ign');
            }
        }
    }
</script>

<style>
</style>