import {todos} from './todos';
import {combineReducers} from 'redux';

let state = {
  todos: []
}

// function reducer(prevState = state, action){
//   return {
//     todos: todos(prevState.todos, action)
//   }
// }


//this below is doing the same thing as above through redux combineReducers function
let reducer = combineReducers({todos})

export default reducer;
