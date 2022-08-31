import React, { useEffect, useState } from 'react'
import { Button, FlatList, TextInput, View, Text, StyleSheet, Image } from 'react-native'
import { Feather, Entypo } from "@expo/vector-icons";

import axios from 'axios'



const Main: React.FC = () => {

    const [pokemons, setPokemons] = useState("")
    const [dados, setDados] = useState({
        name: "",
        peso: "",
        img: "",
        type: "",
        hp: "",
        attack: "",
        defense: ""
    })
    const [showatribbute, setShowatribbute] = useState(false)

    const serchPokemon = async () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons}/`)
            .then(resp => {
                console.log(resp.data.types[0].type.name,);
                setDados({
                    name: pokemons,
                    peso: resp.data.types,
                    img: resp.data.sprites.other.dream_world,
                    type: resp.data.types[0].type.name,
                    hp: resp.data.stats[0].base_stat,
                    attack: resp.data.stats[1].base_stat,
                    defense: resp.data.stats[1].base_stat,
                })
                setShowatribbute(true)
            })
            .catch(err => {
                console.error(err);
            });

    };
    return (
        <>
            <View style={styles.searchSection}>
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPokemons}
                    value={pokemons}
                    placeholder="Nome do pokemon..."
                />
                <Button
                    onPress={serchPokemon}
                    title="Pokemon"
                    accessibilityLabel="Learn more about this Pokemon "
                />
            </View>
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={{ flex: 3, backgroundColor: "red" }} >

                </View>
                <View style={{ flex: 2, backgroundColor: "darkorange", alignItems: "center" }} >
                    {showatribbute ?
                        <View>
                            <Text>Tipo: {dados.type}</Text>
                            <Text>Ataque: {dados.attack}</Text>
                            <Text>Defesa: {dados.defense}</Text>
                        </View> :
                        ''}



                </View>
                <View style={{ flex: 1, backgroundColor: "green" }} />
            </View>
        </>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchSection: {
        flexDirection: 'row',
    },
    searchIcon: {
        paddingTop: 10,
    },
    input: {
        flex: 1,
        color: '#424242',
    },

});
export default Main;
