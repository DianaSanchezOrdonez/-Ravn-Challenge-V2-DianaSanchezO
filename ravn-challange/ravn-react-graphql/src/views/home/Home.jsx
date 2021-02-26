import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ItemListContainer from '../../containers/itemListContainer/ItemListContainer'

export const Home = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer/>
        </>
    )
}
