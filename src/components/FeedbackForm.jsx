import { useState } from "react";
import { RatingSelect } from "./RatingSelect";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card";
export const FeedbackForm = ({ handelAdd }) => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
    if (!text) {
      setDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setDisabled(true);
      setMessage("text must be more than 10");
    } else {
      setMessage(null);
      setDisabled(false);
      setText(e.target.value);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handelAdd(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>How would you rate our service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <div className="message"> {message}</div>}
      </form>
    </Card>
  );
};
