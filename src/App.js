import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './store/todo/todo.types';

import { TodoList, AddTodo } from './components';
import './App.css';

function App() {
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleAddTodo = text => {
    dispatch({
      type: ADD_TODO,
      payload: text
    });
  };

  const handleStatusChange = (todoId, newStatus) => {
    dispatch({
      type: UPDATE_TODO,
      payload: { id: todoId, status: newStatus }
    });
  };

  const handleRemove = todoId => {
    dispatch({
      type: REMOVE_TODO,
      payload: { id: todoId }
    });
  };

  return (
    <div className="container">
      <div className="page-header text-center">
        <h1>Todo App</h1>
      </div>
      <div className="content mt-4">
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList
          list={todo.todos}
          onStatusChange={handleStatusChange}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}

export default App;
