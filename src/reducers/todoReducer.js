import uuid from 'uuid';
import {ADD_TODO, FETCH_TODOS} from '../actions/types';

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
    id: uuid.v4(),
    text: '',
    done: false
  }
};


export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return [...state.todos]
        case ADD_TODO:
            state.todo.text = action.payload;
            return [...state.todos, state.todo];
        // case REMOVE_TODO:
        //     return [...state.todos.filter(todo => todo.id !== action.payload)]
        default:
            return state
    }

}
