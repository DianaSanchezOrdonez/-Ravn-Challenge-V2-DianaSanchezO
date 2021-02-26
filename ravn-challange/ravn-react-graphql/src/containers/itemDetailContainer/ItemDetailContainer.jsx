import React from 'react';
import { gql, useQuery } from '@apollo/client';

/**Components */
import Detail from '../../components/detail/Detail';

import './ItemDetailContainer.css';

const GET_DETAIL_PERSON = gql`
query getDetailPerson ($itemID: ID!) {
    person (id: $itemID){
      id
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
`;

/* return data.allPeople.people.map((character, index) => {
    return <p key={index}>{character.name}</p>;
  }); */

const ItemDetailContainer = ({itemID}) => {
    const { loading, error, data } = useQuery(GET_DETAIL_PERSON, {variables: {itemID}});

    console.log('itemID', itemID)
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error data!..</p>;

    return (
        <aside className='container-detail'>
            {
                <Detail key={data.person.id} detail={data.person}/>
               /*  data.person.map((detail) => {
                    return <Detail key={detail.id} detail={detail}/>  
                }) */
            }
           
        </aside>
    )
}

export default ItemDetailContainer
