import React  from 'react';
import logo from '../logo.svg';
import './App.css';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


const App = () => (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">TODO LIST REACT +  REDUX</h1>
      </header>  
      <AddTodo />
      <VisibleTodoList/>
      <Footer/>
    </div>  
  
)

export default App;

