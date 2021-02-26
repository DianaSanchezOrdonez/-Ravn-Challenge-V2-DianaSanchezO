import React, {useState, useEffect} from 'react';
import { gql, useQuery } from '@apollo/client';

/**Components */
import Item from '../../components/item/Item';

import './ItemListContainer.css';

const GET_GREETING = gql`
{
    allPeople (first:5) {
        people {
        id
        name
        species {
          name
        }
        homeworld {
          name
        }
      }
    }
}
`;

/* return data.allPeople.people.map((character, index) => {
    return <p key={index}>{character.name}</p>;
  }); */

const ItemListContainer = () => {
    const { loading, error, data } = useQuery(GET_GREETING);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error data!..</p>;
   
    return (
        <main className='container-items'>
            {
                data.allPeople.people.map((character) => {
                    return <Item key={character.id} name={character.name} item={character}/>
                  })
            }
            <Item/>
        </main>
    )
}

export default ItemListContainer
