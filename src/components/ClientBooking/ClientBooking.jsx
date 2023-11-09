import { Card, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import React, { useState } from "react"; // Import useState from React

const ClientBooking = ({ booking }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    providerName,
    providerEmail,
    serviceArea,
  } = booking;

  // Create state to store the selected value from the dropdown
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    // Now you can access the selected value from the 'selectedStatus' state
    const status = selectedStatus;

    const serviceInfo = {
      serviceImage,
      serviceName,
      providerName,
      providerEmail,
      serviceArea,
      status,
    };

    fetch(`http://localhost:5000/api/v1/services/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Service update successfully");
        }
      });
  };

  return (
    <div>
      <Card className="max-w-sm">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Others Booking
          </h5>

          <form onSubmit={handleBooking}>
            <Dropdown label="Dropdown button" dismissOnClick={false}>
              <Link to={`/updateBooking/${_id}`}>
                <Dropdown.Item
                  name="status"
                  value="pending"
                  onClick={() => setSelectedStatus("pending")} // Update the selectedStatus state
                >
                  Pending
                </Dropdown.Item>
              </Link>
              <Link to={`/updateBooking/${_id}`}>
                <Dropdown.Item
                  name="status"
                  value="In process"
                  onClick={() => setSelectedStatus("In process")} // Update the selectedStatus state
                >
                  In Process
                </Dropdown.Item>
              </Link>
              <Link to={`/updateBooking/${_id}`}>
                <Dropdown.Item
                  name="status"
                  value="completed"
                  onClick={() => setSelectedStatus("completed")} // Update the selectedStatus state
                >
                  Completed
                </Dropdown.Item>
              </Link>
            </Dropdown>
          </form>
        </div>
        <h2> {serviceName}</h2>

        {/* Rest of your component */}
      </Card>
    </div>
  );
};

ClientBooking.propTypes = { booking: PropTypes.object };

export default ClientBooking;
