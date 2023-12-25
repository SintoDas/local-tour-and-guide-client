import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ServiceCard from "../Services/ServiceCard";
import { Button, Card } from "flowbite-react";
import { Navigate } from "react-router-dom";

const MyProvideServices = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const myServicesUrl = `http://localhost:5000/api/v1/services?providerEmail=${user?.email}`;
  useEffect(() => {
    fetch(myServicesUrl)
      .then((res) => res.json())
      .then((data) => {
        setMyServices(data);
        setIsLoading(false);
      });
  }, [myServicesUrl]);

  return (
    <div className="py-2">
      <h2 className="text-center font-bold text lg py-5 text-cyan-600">
        My available serviceS: {myServices.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5">
        {myServices.map((service) => (
          <Card key={service._id} service={service} className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {service.serviceName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              service.serviceName
            </p>

            <Button>
              see more
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
      </div>
    </div>
  );
};

export default MyProvideServices;
