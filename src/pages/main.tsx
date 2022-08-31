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
                console.log();
                setDados({
                    name: pokemons,
                    peso: resp.data.weight,
                    img: resp.data.sprites.other.dream_world,
                    type: resp.data.types[0].type.name,
                    hp: resp.data.stats[0].base_stat,
                    attack: resp.data.stats[1].base_stat,
                    defense: resp.data.stats[2].base_stat,
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
                flexDirection: "column"
            }]}>
                <View style={{ flex: 3 }} >
                    {showatribbute ?
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.textPrincipal}> {dados.name}</Text>
                        </View>
                        : ''}
                </View>

                <View style={{ flex: 2, backgroundColor: "#FFF", borderRadius: 15, borderWidth: 1, borderColor: '#2FD9AB' }} >
                    {showatribbute ?
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.textLabel}>Tipo: {dados.type}</Text>
                                <Text style={styles.textLabel}>Ataque: {dados.attack}</Text>
                                <Text style={styles.textLabel}>Defesa: {dados.defense}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                                <Text style={styles.textLabel}>HP: {dados.hp}</Text>
                                <Text style={styles.textLabel}>Peso: {dados.peso}</Text>
                            </View>

                        </View> :
                        ''}

                </View>
            </View>
        </>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2FD9AB"
    },
    searchSection: {
        flexDirection: 'row',
        height: 40,
        
    },
    searchIcon: {
    },
    input: {
        flex: 1,
        color: '#424242',
    },
    textLabel: {
        fontWeight: "bold",
        fontSize: (18),
        paddingRight: (2),
        borderRadius: (2),
        borderColor: "white"

    },
    textPrincipal: {
        fontSize: (24),
        fontWeight: "bold",
    }

});
export default Main;
