import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions/todoActions';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    const todos = this.props.todos || [];
    return (
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);
