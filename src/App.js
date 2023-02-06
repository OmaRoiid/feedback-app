import React, { useState } from "react";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import "./index.css";

const App = () => {
  const [feedBack, setFeedBackList] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    setFeedBackList(feedBack.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedBack} />
        <FeedbackList feedback={feedBack} handelDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
