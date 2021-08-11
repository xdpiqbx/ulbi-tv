import React, { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Input placeholder');

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Incr</button>
      <button onClick={decrement}>Decr</button>
      <hr />
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
