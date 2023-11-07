import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { Button, Checkbox, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageServices = () => {
  const [yourServices, setYourServices] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/api/v1/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Data deleted successfully");
            const remaining = yourServices.filter(
              (service) => service._id !== id
            );
            setYourServices(remaining);
          }
        });
    }
  };

  const url = `http://localhost:5000/api/v1/services?providerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setYourServices(data);
      });
  }, [url]);
  console.log(yourServices);
  return (
    <div className="py-10">
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
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {yourServices.map((service) => (
            <Table.Row
              key={service._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {service?.ServiceName || "private Service"}
              </Table.Cell>
              <Table.Cell>{service?.providerName}</Table.Cell>
              <Table.Cell>{service?.serviceArea || "Bangladesh"}</Table.Cell>
              <Table.Cell>{service?.servicePrice}</Table.Cell>
              <Table.Cell>
                <Link to={`/api/v1/services/${service._id}`}>
                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageServices;
