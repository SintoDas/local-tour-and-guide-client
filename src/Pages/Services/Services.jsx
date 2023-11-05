import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Button } from "flowbite-react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false); // Mark data loading as complete
      });
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-4xl text-center font-bold p-2">
        Our Popular Services {services.length}
      </h2>
      {isLoading ? (
        // Display a loading spinner while fetching data
        <LoadingSpinner></LoadingSpinner>
      ) : (
        // Render the services when data is available
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-10">
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      )}
      <Button className="mx-auto my-5">Show all Services</Button>
    </div>
  );
};

export default Services;
