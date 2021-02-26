import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Item from '../../components/item/Item';

import './ItemListContainer.css';

const GET_GREETING = gql`
{
    allPeople {
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
                data.allPeople.people.map((character, index) => {
                    return <Item key={character.id} name={character.name}/>
                  })
            }
            <Item/>
        </main>
    )
}

export default ItemListContainer