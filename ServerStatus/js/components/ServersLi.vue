<template>
     <li class="list-group-item">
        Server #{{ server.number }} - Status: {{server.status}} - 
        <button class="btn btn-default" @click="changeStatus(server)">
            Turn <span v-if="server.isOn">Off</span><span v-else>On</span>
        </button>
                
    </li>

</template>

<script>
import {eventBus} from '../app.js';

export default {
    props: ['server'],
    methods:{
        changeStatus(obj){
            if(obj.status === 'off'){
                obj.status = 'on';
                obj.isOn = true;
                eventBus.$emit('pinServer', obj);
            }else{
                obj.status = 'off';
                obj.isOn = false;
                eventBus.$emit('pinServer', obj);
            };
        }
    }


}
</script>