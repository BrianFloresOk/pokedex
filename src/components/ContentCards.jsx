import { PokeParr } from './PokeFilter';
import styled from "styled-components"
import { Card } from './card/Card'
import useFetchPokemons from '../hooks/pokeHook';
import { ScrollToTop } from './ScrollToTop';

const MainContent = styled.main`
    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(4,1fr);
        padding: 20px;
        gap: 30px 10px;
    }   

`;

const ButtonContent = styled.div`
    display: flex;
    width: 65%;
    margin: 20px auto;
    justify-content: space-evenly;

    @media(min-width: 768px) {
        width: 30%;
    }

    @media(min-width: 1024px) {
        width: 20%;
    }
`;

const Buttons = styled.button`
    padding: 8px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    background: var(--redLight);
    width: 100px;
    color: white;
    font-family: var(--rusoOne-font);
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.28) 2px 2px 2px -1px;

    :hover {
        cursor: pointer;
    }

    @media(min-width: 1024px) {
    padding: 14px;
    font-size: 1.2rem;
    width: 120px;
    color: white;
    font-family: var(--rusoOne-font);
    text-align: center;
    }
`;


export const ContentCards = () => {

    const { pokemons, loading, currentPage, setCurrentPage } = useFetchPokemons()

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };



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
            <ScrollToTop />
            <ButtonContent>
                <Buttons onClick={handlePrevPage} disabled={currentPage === 1}>
                    Atrás
                </Buttons>
                <Buttons onClick={handleNextPage}>Siguiente</Buttons>
            </ButtonContent>
        </div>
    );
}