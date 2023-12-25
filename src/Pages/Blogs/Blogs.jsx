import { Button, Card } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/blogs?page=${page}`
        );
        const data = await response.json();
        setBlogs((prevBlogs) => [...prevBlogs, ...data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);
  return (
    <div className="grid grid-cols-1 md:grid-clos-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        // Render each blog item
        <Card key={blog._id} className="max-w-sm">
          <div className="flex justify-end ">
            <h2 className="text-lg  font-bold">
              Posted Date: <span className="text-blue-600">{blog.date}</span>
            </h2>
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog?.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {blog?.description}
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      ))}
      <div ref={loader}></div>
    </div>
  );
};

export default Blogs;
