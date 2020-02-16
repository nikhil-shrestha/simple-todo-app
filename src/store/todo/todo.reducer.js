import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './todo.types';

const INITIAL_STATE = {
  todos: []
};

const enterpriseReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: payload, completed: false }
        ]
      };

    case UPDATE_TODO:
      const newTodos = [...state.todos];
      const itemIndex = newTodos.findIndex(({ id }) => id === payload.id);
      if (!itemIndex === -1) return;
      newTodos[itemIndex].completed = payload.status;
      return {
        ...state,
        todos: newTodos
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(({ id }) => id !== payload.id)
      };

    default:
      return state;
  }
};
export default enterpriseReducer;
