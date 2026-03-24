import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Content from "./components/Content.js";
import Details from "./components/Details.js";

function App() {
  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <Navbar title="TextUtils" />
      <Content text={text} setText={setText} />
      <Details text={text} />
    </>
  );
}

export default App;
