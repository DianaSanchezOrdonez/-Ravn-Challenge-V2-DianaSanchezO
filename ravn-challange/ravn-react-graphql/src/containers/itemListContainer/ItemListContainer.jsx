import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
/**Library React-icons */
import * as IconName from "react-icons/md";

/**Components */
import Loader from "../../components/loader/Loader";

import "./ItemListContainer.css";

const GET_ALL_PEOPLE = gql`
  query getAllPeople($after: String) {
    allPeople(after: $after) {
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
      pageInfo {
        endCursor
      }
    }
  }
`;

const ItemListContainer = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_PEOPLE, {
    variables: { after: null },
  });

  if (loading) return <Loader error={false} />;
  if (error) return <Loader error={true} />;

  return (
    <main className="container-items">
      {data.allPeople.people.map((character) => {
        return (
          <section key={character.id} className="card-item d-flex-row">
            <div className="card-body">
              <h2 className="h2-text-default">{character.name}</h2>
              <p className="p-text-low-emphasis">
                {character.species ? character.species.name : "Human"} from{" "}
                {character.homeworld.name}
              </p>
            </div>
            <button className="btn-detail-card">
              <Link to={`/${character.id}`}>
                <IconName.MdKeyboardArrowRight />
              </Link>
            </button>
          </section>
        );
      })}

      {/* Try to Loading the data with Pagination
      <button onClick={()=> {
          const {endCursor} = data.allPeople.pageInfo;
          
          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.allPeople.people = [
                ...prevResult.allPeople.people,
                ...fetchMoreResult.allPeople.people,
              ];  
              return fetchMoreResult; 
            }
          })
        }}>View more...</button> */}
    </main>
  );
};

export default ItemListContainer;
