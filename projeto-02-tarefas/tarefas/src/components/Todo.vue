<template>
    <div>        
        <slot name="tarefa"></slot>
        <button>x</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: []
        }
    }
    
}
</script>

<style scoped>

</style>