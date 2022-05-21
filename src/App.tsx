import React, { useRef } from "react";
import { XVirtual } from "@/components/x-virtual";

function App() {
  const eleRef = useRef<any>(null);
  return (
    <div className="App">
      <XVirtual
        data={Array.from({ length: 20 }, (_, i) => `andy-${i}`)}
        itemHeight={40}
        windowHeight={window.innerHeight / 2}
        ref={eleRef}
        itemContent={(item)=> {
          return <div>{item}</div>
        }}
      />
      <br />
      <button
        onClick={() => {
          eleRef?.current?.scrollToIndex(20);
        }}
      >
        scroll
      </button>{" "}
      <button
        onClick={() => {
          eleRef?.current?.scrollToIndex(0);
        }}
      >
        top
      </button>
    </div>
  );
}

export default App;
