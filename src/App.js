import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import TodoList from './components/todos/TodoList';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {

  state = {
    todoList: [
      {
        id: uuid.v4(),
        text: 'shopping',
        done: false 
      },
      {
        id: uuid.v4(),
        text: 'office',
        done: false
      },
      {
        id: uuid.v4(),
        text: 'drop kid at school',
        done: false
      }

    ]
  }

  toggleDone = (id) => {
    this.setState({ todoList: this.state.todoList.map( todo => {
      if(todo.id === id) {
        todo.done = !todo.done
      }
      return todo;
    })});
  }

  removeTodo = (id) => {
    this.setState({ 
      todoList:[...this.state.todoList.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) =>{
    const newTodo = {
      id: uuid.v4(),
      text: title,
      done: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
  render() {
    return (
      <Router>
        <div className="App" >
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todoList={this.state.todoList} toggleDone={this.toggleDone} removeTodo={this.removeTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
