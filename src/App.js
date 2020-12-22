import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddDeployment from './components/AddDeployment';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddDeployment} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
