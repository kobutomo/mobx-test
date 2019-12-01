import React from 'react';
import Counter from "./components/Counter"
import ShowCount from "./components/ShowCount"

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter></Counter>
      <ShowCount></ShowCount>
    </div>
  );
}

export default App;
