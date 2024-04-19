import { useState } from "react";
import "./joke.css";
import { useEffect } from "react";
function Jokes() {
  let [joke, setJoke] = useState({});
  const URL = "https://v2.jokeapi.dev/joke/Dark";
  const getJoke = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setJoke({ setup: data.setup, delivery: data.delivery });
  };

  useEffect(() => {
    async function getJokes() {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setJoke({ setup: data.setup, delivery: data.delivery });
    }
    getJokes();
  }, []);

  return (
    <div>
      <h1>Jokes Random</h1>
      <div className="container">
        <div className="jokebox">
          <h2 className="setup">{joke.setup}</h2>
          <h2 className="delivery">{joke.delivery}</h2>
        </div>
        <button onClick={getJoke}>Get New Joke</button>
      </div>
    </div>
  );
}
export default Jokes;
