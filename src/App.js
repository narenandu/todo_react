import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {

  state = {
    todoList: [
      {
        id: 1,
        text: 'shopping',
        done: false
      },
      {
        id: 2,
        text: 'office',
        done: true
      },
      {
        id: 3,
        text: 'drop kid at school',
        done: false
      }

    ]
  }

  render() {
    return (
      <div className="App" >
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }

}

export default App;
