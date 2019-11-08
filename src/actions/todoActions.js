import {ADD_TODO, REMOVE_TODO, FETCH_TODOS} from './types';

export const fetchTodos = () => dispatch => {
    return(todoList => dispatch( {
        type: FETCH_TODOS,
        payload: {}
    }));
};

export const addTodo = (todo) => dispatch => {
    return(todo => dispatch( {
        type: ADD_TODO,
        payload: todo 
    }));
};
