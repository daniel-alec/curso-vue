<template>
    <div>
        <todo v-for="todo in todos" :key="todo">
            <span slot="tarefa">{{ todo }}</span>
        </todo>
    </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
  components: { Todo },
    data() {
        return {
            todos: []
        }
    }
    
}
</script>

<style scoped>

</style>