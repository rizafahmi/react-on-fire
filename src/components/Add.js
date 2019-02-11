import React from 'react';

const Add = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default Add;
