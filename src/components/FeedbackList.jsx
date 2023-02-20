import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FeedbackItem } from "./FeedbackItem";

export function FeedbackList({ handelDelete }) {
  const { feedback } = useContext(FeedbackContext);
  console.log(feedback);
  if (!feedback || !feedback.length) {
    return <p> No Feedback Yet.</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handelDelete={handelDelete} />
      ))}
    </div>
  );
}
