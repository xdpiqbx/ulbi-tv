import React from 'react';
import Card, { CardVariant } from './Components/Card';

function App() {
  return (
    <div>
      <Card variant={CardVariant.outlined} width="200px" height="200px">
        <button>Button</button>
      </Card>
    </div>
  );
}

export default App;
