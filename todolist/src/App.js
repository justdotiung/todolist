import React from 'react';
import './App.css'
import TodoTemplate from './components/TodoTemplate';
import { Route } from 'react-router-dom';
import HomeTemplate from './components/home/HomeTemplate';

const App = () => {

  

  return (
    <div>
      <Route path="/" component={HomeTemplate} exact={true}/>
      <Route path="/todo" component={TodoTemplate}/>
    </div>
  );
};

export default App;