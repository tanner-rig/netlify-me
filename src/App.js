import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    await fetch("https://api.chucknorris.io/jokes/random").then((data) =>
      data.json().then((res) => setJoke(res.value))
    );
  };

  return (
    <div className="App">
      <button onClick={getJoke}>Get Joke</button>
      {joke && (
        <>
          <h3>Here's your Chuck Norris fact ya filthy animal:</h3>
          <h2> {joke}</h2>
        </>
      )}
    </div>
  );
}

export default App;
