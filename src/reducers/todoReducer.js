import uuid from 'uuid';
import { ADD_TODO, FETCH_TODOS, ADDING_TODO } from '../actions/types';

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
  todo: {}
};


export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      console.log("..fetchTodos");
      console.log(state.todos);
      return { todos: [...state.todos.todos], todo: state.todos.todo };
    // case ADD_TODO:
    //   return { todos: [...state.todos], todo: action.payload };
    case ADDING_TODO:
      console.log("... here in reducer addingtodo");
      // console.log(state);
      // console.log(action.payload);
      return state;
    // case REMOVE_TODO:
    //     return [...state.todos.filter(todo => todo.id !== action.payload)]
    default:
      return state
  }

}
