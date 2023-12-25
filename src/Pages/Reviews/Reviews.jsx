import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";

const Reviews = () => {
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const rating = form.description.value;

    const reviewInfo = {
      name,
      description,
      rating,
    };

    fetch("http://localhost:5000/api/v1/create-review", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review successfully added");
        }
      });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={handleReview} className="flex w-1/2 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          {/* Use textarea for the description field */}
          <textarea
            className="w-full"
            id="description"
            name="description"
            placeholder="Enter description"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="rating" value="Rating" />
          </div>
          {/* Assuming rating is a number input, adjust as needed */}
          <TextInput
            id="rating"
            name="rating"
            type="number"
            placeholder="Enter rating"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Reviews;
