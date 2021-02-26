import React from 'react';

/**Components */
import Navbar from '../../components/navbar/Navbar';
import ItemListContainer from '../../containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemDetailContainer/ItemDetailContainer';

export const Home = () => {
    return (
        <>
            <Navbar />
            <section className="container d-flex-row">
                <ItemListContainer/>
                <ItemDetailContainer/>
            </section> 
        </>
    )
}
