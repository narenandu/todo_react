import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import uuid from 'uuid';

export const initialState = {
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

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, 
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
