import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import InputTodos from './components/InputTodos'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Links from './components/Links'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Redux Todos App</h2>
        </div>
        <Router>
          <div className="todos-wrapper">
            <Message />
            <InputTodos />
            <Route path='/:filter?' render={({match}) => ( <TodoList filter={match.params.filter} /> )} />
            <Links />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
