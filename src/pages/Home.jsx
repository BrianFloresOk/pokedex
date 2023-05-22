import React from 'react';
import { ContentCards } from '../components/ContentCards';
import { Header } from '../components/header/Header';
import { ContentSearch } from '../components/ContentSearch';

export const Home = () => {

    return(
    <div>
            <Header></Header>
            <ContentSearch></ContentSearch>
            <ContentCards />


        </div>
    )
}
