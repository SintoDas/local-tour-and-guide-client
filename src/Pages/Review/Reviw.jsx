import { useState } from "react";
import FeedbackList from "../../components/FeedbackList/FeedBackList";
import FeedbaclForm from "../FeedbackForm/FeedbaclForm";

const Reviw = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmitFeedback = (feedback) => {
    // Add the submitted feedback to the feedback list
    setFeedbackList([...feedbackList, feedback]);
  };
  return (
    <div>
      <h2> Tour guide</h2>
      <FeedbackList feedbackList={feedbackList}></FeedbackList>
      <FeedbaclForm onSubmitFeedback={handleSubmitFeedback}></FeedbaclForm>
    </div>
  );
};

export default Reviw;
