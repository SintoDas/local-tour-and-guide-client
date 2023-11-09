import { Button } from "flowbite-react";
import { useState } from "react";

const FeedbaclForm = ({ onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFeedback(feedback);
    setFeedback("");
  };
  return (
    <div>
      <div>
        <h3 className="text-lg py-5 font-semibold">
          Provide Feedback About Your services
        </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          ></textarea>
          <br />
          <Button
            type="submit"
            className="mt-2 px-4 py-2 text-white rounded-md"
          >
            Submit Feedback
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbaclForm;
