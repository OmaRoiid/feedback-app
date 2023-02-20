import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AboutLink } from "./components/AboutLink";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import { FeedbackData } from "./data/FeedbackData";
import { About } from "./pages/About";

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handelAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handelDelete={deleteFeedback} />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AboutLink />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
