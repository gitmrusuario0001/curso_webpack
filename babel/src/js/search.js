async function search(id){
    console.log('searching...',id)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    console.log(response)
    const pokemon = await response.json() 
    return pokemon 
}

export default search