import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  const sendQuery = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className="search">
      <form action="">
        <input
          type="text"
          className="form-control"
          placeholder="Search Character"
          autoFocus
          value={text}
          onChange={(e) => sendQuery(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Search;
