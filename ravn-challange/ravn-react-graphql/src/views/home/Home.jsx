import React from 'react';
import {useParams} from 'react-router-dom';

/**Components */
import Navbar from '../../components/navbar/Navbar';
import ItemListContainer from '../../containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../../containers/itemDetailContainer/ItemDetailContainer';
import Loader from '../../components/loader/Loader';

export const Home = () => {
    const { itemID } = useParams();
    return (
        <>
            <Navbar />
            <section className="container d-flex-row">
                <ItemListContainer/>
                {/* <ItemDetailContainer itemID={itemID}/> */}
            </section>
        </>
    )
}
