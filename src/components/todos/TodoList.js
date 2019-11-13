import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../../actions/todoActions';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <Todo key={todo.id} 
                todo={todo}
            />
        ));
    }
}

TodoList.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect (mapStateToProps, {fetchTodos})(TodoList);
