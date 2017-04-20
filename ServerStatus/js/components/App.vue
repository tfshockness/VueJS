<template>
    <div class="container">
        <my-header :owner="name" :resetFn="resetName" @resetTheName="name = $event"></my-header>
        <br>
        <button class="btn btn-primary" @click="changeName">Change Name</button>
        <hr>
        <server-list></server-list>
        <hr>
        <my-footer :website="website"></my-footer>
        <p>My name is {{ name }}</p>
    </div>
</template>

<script>
import Footer       from './Footer.vue';
import Header       from './Header.vue';
import ServerList   from './ServerList.vue';

    export default {
        data: function(){
            return {
                name: "Timoteo Shockness",
                website: "http://timoshockness.com"
            }
        },

        components: {
        'my-header': Header,
        'server-list': ServerList,
        'my-footer': Footer
        },

        methods: {
            changeName(){
                this.name = "Kate Lee"
            },
            resetName(){
                this.name = "Timoteo Shockness"
            },
            showEvent(e){
                console.log(e);
            }
        }

    }
</script>