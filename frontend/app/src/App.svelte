<script>
	async function fetchData() {
		const pizzas = await fetch('http://localhost:3000/pizzas')
		.then((res) => res.json())
		return pizzas
	}
	let promise = fetchData()
	function handleClick() {
		promise = fetchData()
	}

</script>

<main>
	<h1>Hungry? Want to eat one of our pizzas? Take a look!</h1>
	{#await promise}
		<p>Fetching server data</p>
	{:then pizzas} 
	{#each pizzas as pizza}
		{pizza.name}
	{/each}
	{/await}
	<button on:click={handleClick}>Hello</button>
</main>

<style>
</style>