import React, { useEffect, useState } from 'react'
import { Button, FlatList, TextInput, View } from 'react-native'
import axios from 'axios'



const Main: React.FC = () => {

    const [pokemons, setPokemons] = useState("")
    const [dados, setDados] = useState({})



    const serchPokemon = async () => {
        // const url = ;
        // const response = await axios.get(url);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons}/`)
            .then(resp => {
                console.log();
                setDados({
                    name: pokemons, typy: resp.data.types,
                    img:resp.data.sprites.other.dream_world, 
                    type:resp.data.types[0].type.name, 
                    hp: resp.data.stats[0].base_stat,
                    attack: resp.data.stats[1].base_stat,
                    defense: resp.data.stats[1].base_stat,
                    widht:resp.data.types.width


                 })
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });

    };
    return (
        <>
            <TextInput
                onChangeText={setPokemons}
                value={pokemons}
                placeholder="Pokemon"

            />
            <Button
                onPress={serchPokemon}
                title="Pokemon"
                color="#841584"
                accessibilityLabel="Learn more about this "
            />


        </>
    )

}
export default Main;