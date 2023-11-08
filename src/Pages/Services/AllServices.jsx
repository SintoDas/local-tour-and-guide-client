import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Button } from "flowbite-react";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false); // Mark data loading as complete
      });
  }, []);
  useEffect(() => {
    // Apply filtering based on searchQuery
    setFilteredServices(
      services.filter((service) =>
        service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, services]);
  const handleShowAllServices = () => {
    setShowAllServices(true);
  };

  return (
    <div className="py-4 sm:py-10">
      <h2 className="text-4xl text-center font-bold p-2">
        Our All Services Is Here
      </h2>
      <div className="flex flex-col items-center my-2 sm:my-4">
        <input
          type="text"
          placeholder="Search by service name"
          className="p-2 w-3/4 border border-gray-300 rounded mb-4"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button className=" text-white px-6 py-2 rounded">
          search by ServiceName
        </Button>
      </div>
      {isLoading ? (
        // Display a loading spinner while fetching data
        <LoadingSpinner></LoadingSpinner>
      ) : (
        // Render the services when data is available
        <div className="w-full mb-20">
          {searchQuery === "" && !showAllServices
            ? services
                .slice(0, 6)
                .map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))
            : filteredServices.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
          {!showAllServices && (
            <div className="text-center col-span-2 py-10 ">
              <Button
                onClick={handleShowAllServices}
                className="text-white px-6 py-2 rounded"
              >
                See More
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllServices;
