import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";

const AddBlog = () => {
  const handleBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.postedDate.value;
    const title = form.blogTitle.value;
    const description = form.blogDescription.value;

    const blogInfo = {
      date,
      title,
      description,
    };

    fetch("http://localhost:5000/api/v1/create-blog", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blogInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("blog successfully added");
        }
      });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={handleBlog} className="flex w-1/2 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="postedDate" value="Posted Date" />
          </div>
          <TextInput
            id="postedDate"
            name="postedDate"
            type="date" // You can adjust the type as needed
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="blogTitle" value="Blog Title" />
          </div>
          <TextInput
            id="blogTitle"
            name="blogTitle"
            type="text"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="blogDescription" value="Blog Description" />
          </div>
          {/* Use textarea for the blog description field */}
          <textarea
            className="w-full"
            id="blogDescription"
            name="blogDescription"
            placeholder="Enter blog description"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="writerName" value="Writer Name" />
          </div>
          <TextInput
            id="writerName"
            name="writerName"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddBlog;
