import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [state, setState] = useState({
    gifs: [],
    query: "cows",
  });

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${state.query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setState((prevState) => ({ ...prevState, gifs }));
      });
  }, [state.query]);

  return (
    <div>
      <GifList gifs={state.gifs} />
      <GifSearch onSubmitQuery={(query) => setState({ ...state, query })} />
    </div>
  );
}

export default GifListContainer;
