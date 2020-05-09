<template>
	<div id="app">
		<NavBar />
		<TextEditor />
	</div>
</template>

<script>
	import NavBar from './components/NavBar.vue'
	import TextEditor from './components/TextEditor.vue'

	export default 
	{
		name: 'App',
		components: 
		{
			NavBar,
			TextEditor
		}
	}
</script>
