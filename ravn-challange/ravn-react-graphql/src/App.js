import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Navbar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer'

import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  {
    allPeople {
      people {
        name
        species {
          name
        }
      }
    }
  }
`;

const Hello = () => {
  const { loading, error, data } = useQuery(GET_GREETING);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error data!..</p>;

  return data.allPeople.people.map((character, index) => {
    return <p key={index}>{character.name}</p>;
  });
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer>
       {/*  <Hello /> */}
      </ItemListContainer>
      
    </div>
  );
}

export default App;
