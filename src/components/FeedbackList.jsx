import PropTypes from "prop-types";
import { FeedbackItem } from "./FeedbackItem";

export function FeedbackList({ feedback, handelDelete }) {
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

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};
