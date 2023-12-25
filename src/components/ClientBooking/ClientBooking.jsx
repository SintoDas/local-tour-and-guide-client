import { Checkbox, Dropdown, Table } from "flowbite-react";

import PropTypes from "prop-types";
import toast from "react-hot-toast";

const ClientBooking = ({ booking }) => {
  const { serviceName, providerName, servicePrice, serviceArea } = booking;

  return (
    <div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Service Name</Table.HeadCell>
          <Table.HeadCell>Provider Name</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <Dropdown>
              <Dropdown.Item value="Pending">Pending</Dropdown.Item>
              <Dropdown.Item value="In Progress">In Progress</Dropdown.Item>
              <Dropdown.Item value="Completed">Completed</Dropdown.Item>
            </Dropdown>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {serviceName}
            </Table.Cell>
            <Table.Cell>{providerName}</Table.Cell>
            <Table.Cell>{serviceArea || "Bangladesh"}</Table.Cell>
            <Table.Cell>{servicePrice || "$1200"}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

ClientBooking.propTypes = { booking: PropTypes.object };

export default ClientBooking;
