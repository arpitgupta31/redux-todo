import { ADD_TODO, TOGGLE_TODO } from '../actions/index';

export default function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [ ...state, {text: action.text, completed: false, id: state.length}];
    case TOGGLE_TODO:
      return state.map( (todo, index) => {
          if(index === action.index) {
            return Object.assign({}, todo, { completed: !todo.completed });
          }else{
            return todo;
          }
        });
    default:
      return state;
  }
}