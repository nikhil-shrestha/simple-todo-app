import React from 'react';
import TodoItem from './components/TodoItem';

function Todo({ list, onStatusChange, onRemove }) {
  return (
    <ul className="list-group">
      {list.map(({ id, ...rest }) => (
        <li key={id} className="list-group-item">
          <TodoItem
            onStatusChange={newStatus => onStatusChange(id, newStatus)}
            onRemove={() => onRemove(id)}
            {...rest}
          />
        </li>
      ))}
    </ul>
  );
}

export default Todo;
