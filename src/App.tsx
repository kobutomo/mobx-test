import React from 'react';
import Counter from "./components/Counter"
import ShowCount from "./components/ShowCount"
import { useStore, StoreProvider } from "./hooks/useStore"

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <Counter></Counter>
        <ShowCount></ShowCount>
      </div>
    </StoreProvider>
  );
}

export default App;
