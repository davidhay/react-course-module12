import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

const App = (props) => {
  console.log("App function running");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (allowToggle) {
        console.log("toggle is allowed");
        setShowParagraph((prevState) => !prevState);
      } else {
        console.log("toggle is not allowed");
      }
    },
    [allowToggle]
  );

  const allowToggleHandler = (event) => {
    event.preventDefault();
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;
