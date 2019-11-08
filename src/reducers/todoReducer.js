import uuid from 'uuid';
import {ADD_TODO, REMOVE_TODO, FETCH_TODOS} from '../actions/types';


const initialState = {
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
      ],
    todo: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return [...state.todos.todoList]
        case ADD_TODO:
            const newTodo = {
                id: uuid.v4(),
                text: action.payload,
                done: false
            }
            return [...state.todos.todoList, newTodo];
        case REMOVE_TODO:
            return [...state.todoList.filter(todo => todo.id !== action.payload)]
        default:
            return [...state.todoList];
    }

}
