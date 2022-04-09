import React, { useRef } from "react";
import { VirtualList } from "./components/VirtualList";

function App() {
  const eleRef = useRef<any>(null);
  const onClick = () => {
    eleRef?.current?.scrollToIndex(20);
  };

  return (
    <div className="App">
      <VirtualList
        data={Array.from({ length: 2000 }, (_, i) => `andy-${i}`)}
        itemHeight={40}
        windowHeight={200}
        ref={eleRef}
      />
      <br />
      <button onClick={onClick}>scroll</button>
    </div>
  );
}

export default App;
