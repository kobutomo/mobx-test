import React from 'react';
import Counter from "./components/Counter"
import ShowCount from "./components/ShowCount"
import Name from "./components/Name"
import { StoreProvider } from "./hooks/useStore"

const style = {
  width: "1000px",
  margin: '0 auto'
}


const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App" style={style}>
        <Counter></Counter>
        <ShowCount></ShowCount>
        <Name></Name>
      </div>
    </StoreProvider>
  );
}

export default App;
