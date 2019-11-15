import {ADD_TODO, FETCH_TODOS, ADDING_TODO} from './types';

export const fetchTodos = () => dispatch => {
    return(todoList => dispatch( {
        type: FETCH_TODOS,
        payload: {}
    }));
};

export const addTodo = (todo) => dispatch => {
    console.log("todo: " + todo);
    dispatch( {
        type: ADD_TODO,
        payload: todo 
    });
};

export const addingTodo = (todo) => dispatch => {
    console.log("..addingTodo : " + todo);
    dispatch({
        type: ADDING_TODO,
        payload: todo
    });
}