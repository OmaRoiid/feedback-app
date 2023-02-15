import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";

import "./index.css";

const App = () => {
  const [feedBack, setFeedBackList] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedBackList([newFeedback, ...feedBack]);
  };
  const deleteFeedback = (id) => {
    setFeedBackList(feedBack.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <FeedbackForm handelAdd={addFeedback} />
      <div className="container">
        <FeedbackStats feedback={feedBack} />
        <FeedbackList feedback={feedBack} handelDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
