<template>
<div class="row">
    <div class="col-xs-12">
        <header>
            <h1>Server Status: Featured by {{ owner }}</h1><button class="btn btn-success" style="margin-right: 5px;" @click="resetName">Reset Name - $emit</button><button class="btn btn-warning" @click="resetFn">Reset Name - Callback</button>
        </header>
    </div>
</div>
</template>
<script>
    export default {
        props: ['owner', 'resetFn'],
        methods: {
            resetName(){
                this.owner = "Timoteo Shockness";
                this.$emit("resetTheName", this.owner); //the name is passed inside of the variable $event to the Parent
            }
        }
    }
</script>