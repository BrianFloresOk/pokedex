import React from 'react';
import styled from 'styled-components';

const PokeFooter = styled.footer`
margin-top: 50px;
    background-color: #202122;
    padding: 40px 10px 10px;
`;

const Parra = styled.p`
    color: #f0f0f0;
    font-size: 14px;
    text-align: center;
`

export const Footer = () => {
    const currentYear = new Date().getFullYear();


    return (
        <PokeFooter>
            <Parra>Powered by: <strong>Brian Flores</strong></Parra>
            <Parra>&copy; {currentYear} Pokédex API</Parra>
        </PokeFooter>
    );
};