import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import TodoList from './components/todos/TodoList';
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
      <div className="App" >
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <TodoList todoList={this.state.todoList} toggleDone={this.toggleDone} removeTodo={this.removeTodo}/>
        </div>
      </div>
    );
  }

}

export default App;
