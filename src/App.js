import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const onChange = event => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => console.log(value)}>click</button>
    </div>
  );
}

export default App;
