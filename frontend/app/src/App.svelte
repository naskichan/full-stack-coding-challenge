<script>
	import Pizza from './components/Pizza.svelte'
	async function fetchData() {
		const pizzas = await fetch('http://localhost:3000/pizzas')
		.then((res) => res.json())
		return pizzas
	}
	let promise = fetchData()
	let orderItems = []

	function handleClick(ordering, payload) {
		ordering ?
			orderItems = [...orderItems, payload.pizza] :
			orderItems = orderItems.filter(value => value.name !== payload.pizza.name)
	}

	function onlyUnique(value, index, self) {
  		return self.indexOf(value) === index;
	}

</script>

	<center>
		<h1>Hungry? Want to eat one of our pizzas? Take a look!</h1>
		{#await promise}
			<p>Fetching server data</p>
		{:then pizzas} 
			<div class='pizzas'>
				<h2>Your order </h2>
				{#each orderItems.filter(onlyUnique) as pizza}
					<Pizza props={pizza} on:click={() => handleClick(false, {pizza})}/>
						{orderItems.filter(el => el.name == pizza.name).length}
				{/each}
			</div>
			<div class='pizzas'>
				<h2>Explore our menu</h2>
				{#each pizzas as pizza}
					<Pizza props={pizza} on:click={() => handleClick(true, {pizza})}/>
				{/each}
			</div>
		{/await}
	</center>

<style>
	.pizzas {
		display: flex;
		width: 60%;
		margin: 5rem;
		padding: 2rem;
		border-radius: 4px;
		background-color: #36363F;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}
	:global(body) {
		background-color: #444451;
		color: white;
		font-family: 'Open Sans', sans-serif;
	}
</style>