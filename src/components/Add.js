import React from 'react';

const Add = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border rounded shadow py-2 px-3 mx-3"
        type="text"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded"
      >
        💾 Send
      </button>
    </form>
  );
};

export default Add;
