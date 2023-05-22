import styled from "styled-components"
import { FaSearch } from "react-icons/fa";


const PokeForm= styled.form`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: 0 auto;
    border-radius: 0px 8px 8px 0px;
    box-shadow: rgba(0, 0, 0, 0.18) 2px 2px 2px -1px;

    @media(min-width: 768px) {
        width: 50%;
        max-width: 570px;
    }
`;

const PokeDiv = styled.div`
  margin-top: 50px;
`;

const PokeInput = styled.input`
    border: none;
    border-radius: 8px 0px 0px 8px;
    padding: 8px;
    height: 36px;
    font-size: 1rem;
    width: 83%;

    :focus {
        outline: none
    }

    @media(min-width: 1024px) {
        height: 52px;
        padding: 14px;
        font-size: 1.2rem;
    }
`;

const ButtonPoke = styled.button`
    width: 17%;
    background-color: var(--redLight);
    border: none;
    border-radius: 0px 8px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
    }
`;

const Icon = styled(FaSearch)`
    color: white;
    font-size: 19px;
`

export const PokeSearch = () => {
    return (
        <PokeDiv>
            <PokeForm>
                <PokeInput placeholder="Buscar.."/>
                <ButtonPoke><Icon></Icon></ButtonPoke>
            </PokeForm>
        </PokeDiv>
    )
}