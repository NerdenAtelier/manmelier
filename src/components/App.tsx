import React, { useState } from "react";
import UpperNavi from "./UpperNavi";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
