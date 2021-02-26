import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
/**Library React-icons */
import * as IconName from "react-icons/md";

/**Components */
import Loader from '../../components/loader/Loader';

import './ItemListContainer.css';

const GET_PEOPLE = gql`
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
    const { loading, error, data } = useQuery(GET_PEOPLE);
    
    if (loading) return <Loader error={false}/>;
    if (error) return <Loader error={true}/> ;
   
    return (
        <main className='container-items'>
            {
                data.allPeople.people.map((character) => {
                 
                    return (<section key={character.id} className='card-item d-flex-row'>
                              <div className="card-body">
                                  <h2 className='h2-text-default'>{character.name}</h2>
                                  <p className='p-text-low-emphasis'>{(character.species) ? character.species.name : 'Human'} from {character.homeworld.name}</p> 
                              </div>
                              <button className='btn-detail-card'><Link to={`/${character.id}`}><IconName.MdKeyboardArrowRight/></Link></button>        
                          </section>)
                  })
            }
        </main>
    )
}

export default ItemListContainer
