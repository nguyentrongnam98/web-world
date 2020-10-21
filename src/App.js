import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import './App.css';
import Home from './component/Pages/Home';
const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route path = '/' exact component={Home}/> 
       </Switch>
    </BrowserRouter>
  );
};

export default App;