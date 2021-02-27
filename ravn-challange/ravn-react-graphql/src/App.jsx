import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./views/home/Home";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:itemID" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
