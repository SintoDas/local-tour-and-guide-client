const FeedbackList = ({ feedbackList }) => {
  return (
    <div>
      <h3>Feedback and Reviews</h3>
      <ul>
        {feedbackList.map((feedback, index) => (
          <li key={index}>{feedback}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
