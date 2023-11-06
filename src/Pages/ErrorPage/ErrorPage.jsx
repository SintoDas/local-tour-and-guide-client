import { Button } from "flowbite-react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-center text-[200px] text-red-500 font-bold">404</h2>

      <Link to="/">
        <div className="flex justify-center py-10">
          <Button>Go Home</Button>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
