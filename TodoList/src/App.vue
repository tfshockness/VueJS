<template>
  <div class="container">
    <div>
        <div class="app-body col-md-9 card">
            <input type="text" class="form-control col-md-12" placeholder="What needs to be done?" v-model="activity.description" @keyup.enter="addNewTodo">
            <ul v-if="todos" class="list-group">

              <li class="list-group-item list-group-item-action my-pointer" v-for="item in incomplete" @dblclick="deleteTodo(item)">
                <input type="checkbox" class="check" v-model="item.isComplete">
                {{item.description}}
              </li>

            </ul>
              <ul class="list-group" v-if="complete.length > 0">
                <li v-for="item in complete" class="list-group-item list-group-item-action my-pointer" @dblclick="deleteTodo(item)">{{item.description}} <span class="badge badge-pill badge-success">Done</span></li>
              </ul>
        </div>
      <div class="tips col-md-9" v-if="todos.length > 0">
        <p class="blockquote text-muted">Double click to delete a todo</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            todos:[],
            activity: {
                description: '',
                isComplete: false
            }
        }
    },
    methods:{
        addNewTodo(){

            this.todos.push(
                {
                    description: this.activity.description,
                    isComplete: this.activity.isComplete,
                }
            );

            this.activity.description = '';
        },
        deleteTodo(item){
            console.log('maybe nothing happened!');
            let index = this.todos.indexOf(item);
            this.todos.splice(index, 1);
        }
    },
    computed:{
        complete(){
            return this.todos.filter(function(todo){
              return todo.isComplete;
            });
        },
        incomplete(){
            return this.todos.filter(function(todo){
                return !todo.isComplete;
            });
        }
    }
}
</script>

<style>
  .app-body{
    margin: 100px auto auto auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #F7F7F9;
  }
  .app {
    border: 1px black;
  }
  .my-pointer{
    cursor: pointer;
  }
  .check {
    margin-right: 15px;
  }
  .badge{
    margin-left: 15px;
  }
  .tips{
    margin: 20px auto auto auto;
  }
  .tips p {
    font-size: 12px;
  }
  .list-group-item{
    font-size: 16px;
    color:#8c8c8c;
  }

</style>
