import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [editableFeedback, setEditableFeedback] = useState({
    item: {},
    edit: false,
  });
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this for testing",
      rating: 10,
    },
  ]);
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback]);
  };
  const editFeedback = (item) => {
    setEditableFeedback({ item, edit: true });
  };
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editableFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
