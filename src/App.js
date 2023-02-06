import React, { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import "./index.css";

const App = () => {
  const [feedBackList, setFeedBackList] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;
