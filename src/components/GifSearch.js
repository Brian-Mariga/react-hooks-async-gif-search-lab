import React, { useState } from "react";

const GifSearch = ({ onSubmitQuery }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitQuery(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Search Term:
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button type="submit">Find Gifs</button>
      </form>
    </div>
  );
};

export default GifSearch;
