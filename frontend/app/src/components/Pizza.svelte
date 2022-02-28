<script>
//
    
    export let props;
</script>

<div class='pizza' on:click>
    <div class='topwrapper'>
        <p>{props.name}</p>
        <p>{props.price}$</p>
    </div>
    <img src='https://source.unsplash.com/random/?pizza' alt='pizza' />
    <div class='bottomwrapper'>
        {#each props.ingredients as ingredient}
            <p>{ingredient.name}</p>
        {/each}
    </div>
</div>

<style>
    .topwrapper {
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: x-large;
        display: flex;
        justify-content: space-between;
    }
    p {
        all: unset;
        padding: 0rem 0.5rem 0rem 0.5rem;
    }
    img {
        width: 100%;
        object-fit: cover;
        max-height: 66%;
        border-radius: 4px;
    }
    
    .bottomwrapper {
        display: flex;
        flex-wrap: wrap;
        font-size: small;
    }
    .pizza {
        height: 16rem;
        width: 16rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem;
        background-color: #3A3A42;
        cursor: pointer;
        
    }
    .pizza:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
</style>