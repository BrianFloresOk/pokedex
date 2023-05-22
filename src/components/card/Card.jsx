import React from 'react';
import styled from "styled-components"
import { FaWeightHanging } from 'react-icons/fa'
import colorFondo from '../../GlobalStyles/ColoresDeFondo'
console.log(colorFondo);

const ContentCard = styled.article`
    width: 80%;
    margin: 20px auto 0px;
    border: thin solid lightgrey;
    border-radius: 12px;

    @media(min-width: 768px) {
        width: 90%;
        box-shadow: rgba(0, 0, 0, 1.1) 0px 3px 6px -2px;
        border: none;
        border-radius: 13px;
    }
`;

const ContentSection = styled.div`
    width: 100%;
    padding-bottom: 20px;
    `;

const ContentSectionImage = styled(ContentSection)`
    background: linear-gradient(360deg,${props => props.colores[1]}, ${props => props.colores[0]});
    clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 100%, 75% 88%, 25% 88%, 0 100%, 0% 20%);
    border-radius: 13px;
`;

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(10px 11px 12px rgba(0, 0, 0, 0.8));
`;

const ContentImage = styled.div`
    width: 75%;
    height: 75%;
    padding: 30px;
    margin-bottom: 20px;
    margin: 0 auto;
`;

const PokeNombre = styled.p`
    font-size: 16px;
    font-family: var(--rusoOne-font);
    font-weight: normal;
    padding: 10px;
    text-transform: capitalize;

    @media (min-width: 1024px) {
     font-size: 20px;
    }
`;

const PokeTypeInfo = styled.div`
    display: flex;
    width: 100%;
    max-width: 300px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    padding-top: 20px;
`;

const PokeType = styled(PokeNombre)`
    font-size: 12px;
    padding: 10px;
    background-color: ${props => colorFondo[props.bckColor] || '#EFEFEF'};
    color: white;
    border-radius: 6px;
    text-align: center;

    @media(min-width: 768px) {
        font-size: 9px;
        padding: 4px;
    }

    @media (min-width: 1024px) {
     font-size: 14px;
     padding: 12px;
    }
`;

const PokeTypeContent = styled.div`
    display: flex;
    width: 50%;
    justify-content: start;
`;

const PokeListHabilities = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    gap: 10px 8px;
    padding: 20px 0px;

    @media(min-width: 768px) {
        padding: 0px 8px 5px;
        gap: 4px 6px;
    }
`;

const Habilities = styled.li`
    font-size: 14px;
    font-family: var(--raleway-font);
    font-weight: bold;
    text-align: justify;
    padding: 2px 10px;

    @media(min-width: 768px) {
        font-size: 9px;
        padding: 0px;
    }

    @media(min-width: 1024px) {
        font-size: 16px;
        font-family: var(--raleway-font);
        font-weight: bold;
    }

`;

const PokePeso = styled.p`
  @media(min-width: 768px) {
    font-family: var(--raleway-font);
    font-weight: 800;
    font-size: 10px;
  }
  @media(min-width: 1024px) {
    font-size: 14px;
    text-align: end;
  }
`;

export const Card = ({ name, avatar, peso, tipo1, tipo2, movimientos }) => {

    const coloresTipo1 = colorFondo[tipo1] || ['#000', '#000'];
    const coloresTipo2 = colorFondo[tipo2] || 'transparent';
    console.log(coloresTipo1);
    console.log(coloresTipo2);

    return (
        <div>
            <ContentCard>
                <ContentSectionImage colores={[coloresTipo1, coloresTipo2]}>
                    <PokeNombre>{name}</PokeNombre>
                    <ContentImage>
                        <Images src={avatar} alt={name}></Images>
                    </ContentImage>
                </ContentSectionImage>
                <ContentSection>
                    <PokeTypeInfo>
                        <PokeTypeContent>
                            {tipo1 && <PokeType bckColor={tipo1}>{tipo1}</PokeType>}
                            {tipo2 && <PokeType bckColor={tipo2}>{tipo2}</PokeType>}
                        </PokeTypeContent>
                        <PokePeso><FaWeightHanging></FaWeightHanging> {peso}Kg</PokePeso>
                    </PokeTypeInfo>
                    <PokeListHabilities>
                        {movimientos.slice(0, 4).map((movimiento, index) => (
                            <Habilities key={index}>{movimiento}</Habilities>
                        ))}
                    </PokeListHabilities>
                </ContentSection>
            </ContentCard>
        </div>
    )
}