<script>

	import Pizza from './components/Pizza.svelte'
	import axios from 'axios'
	async function fetchPizza() {
		return await axios.get('http://localhost:3000/pizzas')
		.then((res) => res.data)
	}
	async function fetchOrders() {
		return await axios.get('http://localhost:3000/orders')
		.then((res) => res.data)
	}
	let pizzaPromise = fetchPizza()
	let orderPromise = fetchOrders()
	let orderItems = []
	let price = 0

	function handleClick(ordering, payload) {
		ordering ?
			orderItems = [...orderItems, payload.pizza] :
			orderItems = orderItems.filter(value => value.name !== payload.pizza.name)
		calculatePrice()
	}
	function calculatePrice() {
		price = orderItems.map(el => el.price).reduce((p, c) => p + c, 0)
	}
	async function submitOrder() {
		let data = orderItems.filter(onlyUnique).map(el => ({"pizzaId": el.id, "count": orderItems.filter(obj => obj.name === el.name).length}))
		console.log(JSON.stringify(data))
		const response = await axios.post('http://localhost:3000/orders', data).then(res => alert("Your order has been successful. "+JSON.stringify(res.data))).catch(err => alert("There has been a problem, please try again later"))
	}
	
	function onlyUnique(value, index, self) {
  		return self.indexOf(value) === index;
	}

</script>

<center>
	<h1>Hungry? Want to eat one of our pizzas? Take a look!</h1>
	{#await pizzaPromise}
		<p>Fetching server data</p>
	{:then pizzas} 
		<div class='section'>
			<div class='info'>
				<h2>Your order: </h2>
				<h2>Total price: {price}$</h2>
				<button on:click={submitOrder}>Submit</button>
			</div>
			<div class='items'>
				{#each orderItems.filter(onlyUnique) as pizza}
					<Pizza props={pizza} count={orderItems.filter(el => el.name == pizza.name).length} on:click={() => handleClick(false, {pizza})}/>
				{/each}
			</div>
		</div>
		<div class='section'>
			<h2>Explore our menu</h2>
			<div class='items'>
				{#each pizzas as pizza}
					<Pizza props={pizza} count=1 on:click={() => handleClick(true, {pizza})}/>
				{/each}
			</div>
		</div>
	{/await}
	{#await orderPromise}
		<p>Fetching orders</p>
	{:then orders}
	<div class='section'>
		<h2>All orders</h2>
		<div class='orders'>
			{#each orders as order}
				<div class='order'>
					{#each order.orderItems as pizza}
						<p class='orderitem'>{pizza.count}x Pizza Nr. {pizza.pizzaId}</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>	
	{/await}
</center>
<style>
	.section {
		display: flex;
		width: 60%;
		margin: 5rem;
		padding: 2rem;
		border-radius: 4px;
		background-color: #36363F;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}
	.info {
		text-align: left;
	}
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.orders {
		display: flex;
		flex-direction: column;
		margin-left: 8rem;
	}
	.order {
		display: flex;
		justify-content: space-between;
	}
	.orderitem {
		margin: 0.5rem;
	}
	:global(body) {
		background-color: #444451;
		color: white;
		font-family: 'Open Sans', sans-serif;
	}
</style>