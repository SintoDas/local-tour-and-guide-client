import { Card, Dropdown } from "flowbite-react";

const ClientBooking = ({ booking }) => {
  const { providerName, serviceName, providerEmail, servicePrice } = booking;
  return (
    <div>
      <Card className="max-w-sm">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Others Booking
          </h5>
          <Dropdown label="Dropdown button" dismissOnClick={false}>
            <Dropdown.Item>Default</Dropdown.Item>
            <Dropdown.Item>Pending</Dropdown.Item>
            <Dropdown.Item>Confirmed</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <div
                    alt="Neil image"
                    height="32"
                    src="/images/people/profile-picture-1.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Provider : {providerName}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {providerEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="min-w-0 space-x-4 flex-1">
                  <p className="truncate text-sm ml-4 font-medium text-gray-900 dark:text-white">
                    <span className="text-blue-700">ServiceName</span> :
                    {serviceName}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default ClientBooking;
