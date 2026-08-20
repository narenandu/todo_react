import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import TodoList from './components/todos/TodoList';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <AddTodo />
                    <TodoList />
                  </React.Fragment>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
