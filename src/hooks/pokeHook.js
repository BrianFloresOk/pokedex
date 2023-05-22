import { useEffect, useState } from 'react';

const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                let url = 'https://pokeapi.co/api/v2/pokemon/';
                let res = await fetch(url);
                let json = await res.json();
                let results = json.results;

                const fetchPokemonDetails = async (poke) => {
                    try {
                        let res = await fetch(poke.url);
                        let json = await res.json();
                        let typePokemon = json.types;
                        let movePokemon = json.moves;

                        const tiposEnEspañol = async () => {
                            try {
                                let tipos = {
                                    tipo1: ''
                                };
                                let urls = {
                                    url1: typePokemon[0].type.url,
                                    url2: typePokemon[1] ? typePokemon[1].type.url : '',
                                };

                                let res = await fetch(urls.url1);
                                let data = await res.json();

                                tipos = {
                                    tipo1: data.names[5].name,
                                };

                                if (urls.url2) {
                                    let nuevoRes = await fetch(urls.url2);
                                    let nuevoData = await nuevoRes.json();
                                    tipos = {
                                        ...tipos,
                                        tipo2: nuevoData.names[5].name,
                                    };
                                }

                                return tipos;
                            } catch (error) {
                                console.log(error.message);
                                return {};
                            }
                        };

                        const movimientosLista = () => {
                            const arrMovis = movePokemon.filter((mov, index) => index <= 3).map((mov) => mov.move.url);
                            return arrMovis;
                        };

                        const obtenerDatosMovimientos = async () => {
                            try {
                                const movimientosUrls = movimientosLista();
                                const respuestas = await Promise.all(movimientosUrls.map(url => fetch(url)));
                                const datosMovimientos = await Promise.all(respuestas.map(respuesta => respuesta.json()));
                                let moves = datosMovimientos.map((mov) => {
                                    return mov.names[5].name
                                })
                                return moves;
                            } catch (error) {
                                console.log(error);
                                return [];
                            }
                        };

                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.other['official-artwork'].front_default,
                            peso: json.weight,
                            tipos: await tiposEnEspañol(),
                            movimientos: await obtenerDatosMovimientos()
                        };
                        return pokemon;
                    } catch (error) {
                        console.log(error.message);
                        return null;
                    }
                };

                const fetchPokemonData = async () => {
                    const requests = results.map((poke) => fetchPokemonDetails(poke));
                    const pokemonsData = await Promise.all(requests);
                    const filteredPokemons = pokemonsData.filter((pokemon) => pokemon !== null);
                    setPokemons(filteredPokemons);
                    setLoading(false);
                };

                fetchPokemonData();
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    return { pokemons, loading };
};

export default useFetchPokemons;