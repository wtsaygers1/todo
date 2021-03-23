import React from "react";
import Header from "./Header";
import TextBox from "./TextBox";
import BottomBar from "./BottomBar";

function App() {
  return (
    <>
    <Header />
    <TextBox />
    {/* here is where the dynamically rendered list needs to go */}
    <BottomBar />
    </>
  );
}

export default App;
