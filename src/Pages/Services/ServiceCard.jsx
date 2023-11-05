import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { serviceName, serviceDescription } = service;
  return (
    <div>
      <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {serviceDescription}
        </p>
        <Button className="mx-auto btn-sm">View Details</Button>
      </Card>
    </div>
  );
};
ServiceCard.propTypes = { service: PropTypes.object };
export default ServiceCard;
