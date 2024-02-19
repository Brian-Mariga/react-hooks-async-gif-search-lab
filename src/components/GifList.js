import React from "react";

const GifList = ({ gifs }) => (
  <ul>
    {gifs.map(({ url }) => (
      <li key={url}>
        <img src={url} alt="gif" />
      </li>
    ))}
  </ul>
);

export default GifList;
