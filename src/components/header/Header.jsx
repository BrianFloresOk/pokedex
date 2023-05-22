import React from 'react';
import styled from "styled-components"

const PokeTitulo = styled.h2`
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 20px;
    font-weight: normal;
    color: #f6e215;
    filter: drop-shadow(0px 2px 2px blue);

    @media(min-width: 768px) {
        font-size: 26px;
    }
`;

const HeaderPage = styled.header`
    background-color: var(--redLight);
    height: 58px;
    display: flex;
    align-items: center;
`;

const ContentTitle = styled.div`
    width: fit-content;
    margin-left: 15px;
    padding: 5px;
    height: 80%;
`;

export const Header = () => {
    return (
        <div>
            <HeaderPage>
                <ContentTitle>
                    <PokeTitulo>Pokédex</PokeTitulo>
                </ContentTitle>
            </HeaderPage>
        </div>
    )
};