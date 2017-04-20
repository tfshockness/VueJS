<template>
<div>
    <p v-if="serverList < 1">All Server are Offline at the moment.</p>
    <p v-else>Server Online Details:</p>
    <ul class="list-group">
        <li class="list-group-item" v-for="(server, index) in serverList">
                <template v-if="server.isOn">
                    Server# {{ server.number }} is {{ server.status }}
                    <span style="display:none;">{{server.index = index}}</span>
                </template>  
        </li>
    </ul>
</div>
</template>

<script>
import {eventBus} from '../app.js';
    export default {
        data(){
            return {
                serverList: []
            }
        },
        created(){
            let serverList = this.serverList;
            
            eventBus.$on('pinServer', function(obj){
                if(obj !== null){
                    if(obj.status === 'on'){
                        serverList.push(obj);
                    };
                    if(obj.status === 'off'){                     
                        serverList.splice(obj.index, 1);
                    }
                }
            });
        }

    }
</script>

<style>
.fade-enter{
    opacity: 0;
}

.fade-enter-active{
    transition: opacity .5s;
}

.fade-leave{
 
}

.fade-leave-active{
    transition: opacity .5s;
    opacity: 1;
}

</style>