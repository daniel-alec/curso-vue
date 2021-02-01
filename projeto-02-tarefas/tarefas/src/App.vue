<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progress-bar/>
		<add-todo/>
		<todos/>
	</div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import ProgressBar from './components/ProgressBar.vue'
import Todos from './components/Todos.vue'
export default {
  components: { ProgressBar, AddTodo, Todos },

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
