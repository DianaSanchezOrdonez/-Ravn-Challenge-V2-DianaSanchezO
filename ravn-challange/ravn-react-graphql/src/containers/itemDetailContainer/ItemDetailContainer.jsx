import React from 'react';
import { gql, useQuery } from '@apollo/client';

/**Components */
import Detail from '../../components/detail/Detail';

import './ItemDetailContainer.css';

const GET_DETAIL_PEOPLE = gql`
{
    allPeople(first:1) {
        people{
        name
        eyeColor
        hairColor
        skinColor
        birthYear
        starshipConnection {
          starships {
            name
          }
        }
      }
    }
  }
`;

/* return data.allPeople.people.map((character, index) => {
    return <p key={index}>{character.name}</p>;
  }); */

const ItemDetailContainer = () => {
    const { loading, error, data } = useQuery(GET_DETAIL_PEOPLE);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error data!..</p>;

    return (
        <aside className='container-detail'>
            {
                data.allPeople.people.map((detail) => {
                    return <Detail detail={detail}/>  
                })
            }
           
        </aside>
    )
}

export default ItemDetailContainer
