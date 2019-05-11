import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Animation from './Animation';

function App() {
  return (
    <div className="App">
      <Animation/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
