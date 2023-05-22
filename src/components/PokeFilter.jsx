import styled from "styled-components"
import acero from '../assets/simbolos/acero.png'
import agua from '../assets/simbolos/agua.png'
import bicho from '../assets/simbolos/bicho.png'
import dragon from '../assets/simbolos/dragon.png'
import electrico from '../assets/simbolos/electrico.png'
import fantasma from '../assets/simbolos/fantasma.png'
import fuego from '../assets/simbolos/fuego.png'
import hada from '../assets/simbolos/hada.png'
import hielo from '../assets/simbolos/hielo.png'
import lucha from '../assets/simbolos/lucha.png'
import normal from '../assets/simbolos/normal.png'
import planta from '../assets/simbolos/planta.png'
import psiquico from '../assets/simbolos/psiquico.png'
import roca from '../assets/simbolos/roca.png'
import siniestro from '../assets/simbolos/siniestro.png'
import tierra from '../assets/simbolos/tierra.png'
import veneno from '../assets/simbolos/veneno.png'
import volador from '../assets/simbolos/volador.png'


const PokeDiv = styled.div`
    margin-top: 35px;
    padding: 10px;
`;

const PokeUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 16%);
    grid-template-rows: repeat(3, 20%);
    width: 100%;
    align-content: center;
    justify-content: center;
    gap: 10px 2px;

    @media(min-width: 768px) {
        width: 50%;
        margin: 0 auto;
    }

    @media(min-width: 1024px) {
        width: 30%;
    }
`;

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const PokeParr = styled.p`
    font-size: 20px;
    font-weight: lighter;
    font-family: var(--rusoOne-font);
    text-align: center;
    @media (min-width: 768px) {
     font-size: 32px;
    }

`

export const PokeFilter = () => {
    return (
        <PokeDiv>
            <div>
                <PokeParr>Seleccionar por tipo</PokeParr>
            </div>
            <PokeUl>
                <li><Images src={acero} alt="acero"></Images></li>
                <li><Images src={agua} alt="agua"></Images></li>
                <li><Images src={bicho} alt="bicho"></Images></li>
                <li><Images src={dragon} alt="dragon"></Images></li>
                <li><Images src={electrico} alt="electrico"></Images></li>
                <li><Images src={fantasma} alt="fantasma"></Images></li>
                <li><Images src={fuego} alt="fuego"></Images></li>
                <li><Images src={hada} alt="hada"></Images></li>
                <li><Images src={hielo} alt="hielo"></Images></li>
                <li><Images src={lucha} alt="lucha"></Images></li>
                <li><Images src={normal} alt="normal"></Images></li>
                <li><Images src={planta} alt="planta"></Images></li>
                <li><Images src={psiquico} alt="psiquico"></Images></li>
                <li><Images src={roca} alt="roca"></Images></li>
                <li><Images src={siniestro} alt="siniestro"></Images></li>
                <li><Images src={tierra} alt="tierra"></Images></li>
                <li><Images src={veneno} alt="veneno"></Images></li>
                <li><Images src={volador} alt="volador"></Images></li>
            </PokeUl>
        </PokeDiv>
    )
}