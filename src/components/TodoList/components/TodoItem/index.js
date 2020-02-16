import React from 'react';
import './TodoItem.css';

const TodoItem = ({ text, completed, onStatusChange, onRemove }) => (
  <div
    onClick={() => onStatusChange(!completed)}
    className="todo-item d-flex justify-content-between align-items-center"
  >
    <span className={completed ? 'completed' : ''}>{text}</span>
    <button
      type="button"
      className="btn btn-default"
      aria-label="Delete"
      onClick={e => {
        e.stopPropagation();
        onRemove();
      }}
    >
      <span className="oi oi-trash"></span>
    </button>
  </div>
);

export default TodoItem;
