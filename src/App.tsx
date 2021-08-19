import React from 'react';
import Card, { CardVariant } from './Components/Card';

function App() {
  return (
    <div>
      <Card
        onClick={(num: number) => {
          console.log('click', num);
        }}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
    </div>
  );
}

export default App;
