import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

const App = (props) => {
  console.log("App function running");
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = (event) => {
    event.preventDefault();
    setShowParagraph((prevState) => !prevState);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>this is new</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;
