import uuid from 'uuid';
import {ADD_TODO, FETCH_TODOS, ADDING_TODO} from '../actions/types';

export const initialState = {
  todos: [
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
  todo: {

  }
};


export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return {todos: [...state.todos], todo: state.todo};
        case ADD_TODO:
            return {todos: [...state.todos], todo: action.payload};
        case ADDING_TODO:
            return {todos: [...state.todos], todo: action.payload};
        // case REMOVE_TODO:
        //     return [...state.todos.filter(todo => todo.id !== action.payload)]
        default:
            return state
    }

}
