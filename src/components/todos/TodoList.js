import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../../actions/todoActions';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {
    componentWillMount(){
        this.props.fetchTodos();
    }

    render() {
        return this.props.todos.map((todo) => (
            <Todo key={todo.id} 
                todo={todo}
                toggleDone={this.props.toggleDone}
                removeTodo={this.props.removeTodo}
            />
        ));
    }
}

TodoList.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect (mapStateToProps, {fetchTodos})(TodoList);
