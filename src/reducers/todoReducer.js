import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, FETCH_TODOS, ADDING_TODO, REMOVE_TODO } from '../actions/types';

export const initialState = {
  todos: [
    {
      id: uuidv4(),
      text: 'shopping',
      done: false
    },
    {
      id: uuidv4(),
      text: 'office',
      done: false
    },
    {
      id: uuidv4(),
      text: 'drop kid at school',
      done: false
    }
  ],
  todo: {}
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case ADDING_TODO:
      return state;
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
