import { PokeParr } from './PokeFilter';
import styled from "styled-components"
import { Card } from './card/Card'
import useFetchPokemons from '../hooks/pokeHook';

const MainContent = styled.main`
    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(4,1fr);
        padding: 20px;
        gap: 30px 10px;
    }   

`;


export const ContentCards = () => {

    const { pokemons, loading } = useFetchPokemons()

    return (
        <div>
            <PokeParr>Pokémons</PokeParr>
            <MainContent>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    pokemons.map((pokemon) => (
                        <Card
                            key={pokemon.id}
                            name={pokemon.name}
                            avatar={pokemon.avatar}
                            peso={pokemon.peso}
                            tipo1={pokemon.tipos.tipo1}
                            tipo2={pokemon.tipos.tipo2}
                            movimientos={pokemon.movimientos}

                        />
                    ))
                )}
            </MainContent>
        </div>
    );
}