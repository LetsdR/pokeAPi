const dataApiPoke = async ()=>{

        const res = await fetch ("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json()
        const dataPokemon = data.results.map(dataPoke => dataPoke)
        

        console.log(dataPokemon)
    }

    dataApiPoke()

    // function consultarPokemon(id){
    //     fetch ('https://pokeapi.co/api/v2/pokemon/${id}').then(function (response){
    //         response.json()
    //         .then(function(pokemon){
    //             console.log(pokemon.name)
    //         })
    //     })
    // }
    // consultarPokemon(26)


   


