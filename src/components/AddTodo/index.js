import React, { useState } from 'react';
import { connect } from 'react-redux';

function AddTodo({ onAddTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    onAddTodo(value);
    setValue('');
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mb-2 mr-2">
        <input
          type="text"
          className="form-control"
          placeholder="Your Todo here"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add Todo
      </button>
    </form>
  );
}

export default connect()(AddTodo);
