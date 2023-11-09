import { Avatar, Card, Dropdown } from "flowbite-react";

const OthersBooking = ({ boooking }) => {
  const {
    serviceName,
    providerImage,
    providerName,
    providerEmail,
    servicePrice,
  } = booking;
  return (
    <div className="py-2">
      <Card className="">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Service Name
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            {serviceName}
          </a>
        </div>
        <div className="flow-root">
          <ul className="divide-y h-10 divide-gray-200 dark:divide-gray-700">
            <li className="pb-0 pt-3 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex flex-wrap gap-2">
                  <Avatar img={providerImage} alt="provider" rounded />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    <span className="text-cyan-800 font-bold">Provider</span>:{" "}
                    {providerName}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {providerEmail}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {servicePrice}
                </div>
              </div>
            </li>
          </ul>
          <Dropdown label="Dropdown button" dismissOnClick={false}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Card>
      <hr />
    </div>
  );
};

export default OthersBooking;
