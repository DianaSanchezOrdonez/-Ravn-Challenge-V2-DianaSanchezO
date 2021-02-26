import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './views/home/Home';

import './App.css';

/* const Hello = () => {
  const { loading, error, data } = useQuery(GET_GREETING);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error data!..</p>;

  return data.allPeople.people.map((character, index) => {
    return <p key={index}>{character.name}</p>;
  });
}; */

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:itemID' component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
