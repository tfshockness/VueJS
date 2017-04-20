<template>
<div class="row">
    <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
        <servers-li v-for="server in servers" :key="server.number" :server="server"></servers-li>
    </ul>    
    </div>
    <div class="col-xs-12 col-sm-6">
         <server-details></server-details>
    </div>
</div>
</template>

<script>


import ServerDetails from './ServerDetails.vue';
import ServersLi from './ServersLi.vue';


export default {
    data() {
        return {
            servers: [
                {number:1, status: 'off', isOn: false, index: 0},
                {number:2, status: 'off', isOn: false, index: 0},
                {number:3, status: 'off', isOn: false, index: 0},
                {number:4, status: 'off', isOn: false, index: 0},
                {number:5, status: 'off', isOn: false, index: 0}
            ]
        };
    },
    components: {
        'server-details': ServerDetails,
        'servers-li' : ServersLi
    }

}

</script>