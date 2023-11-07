import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const ServiceCard = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, serviceDescription, serviceImage, servicePrice } =
    service;
  return (
    <div>
      <Card className="max-w-sm h-full w-full" imgSrc={serviceImage} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {serviceDescription}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold text-cyan-800">Service Provider</span> :{" "}
          {user?.displayName}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {servicePrice}
          </span>
          <Link
            to={`services/${_id}`}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            View Details
          </Link>
        </div>
      </Card>
    </div>
  );
};
ServiceCard.propTypes = { service: PropTypes.object };
export default ServiceCard;
