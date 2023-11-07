import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Checkbox, Table } from "flowbite-react";

const MySchedules = () => {
  const [yourBooking, setYourBooking] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/api/v1/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setYourBooking(data);
      });
  }, [url]);
  return (
    <div>
      {yourBooking.length === 0 && <p>No bookings found.Booking Soon</p>}

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y"></Table.Body>
      </Table>
    </div>
  );
};

export default MySchedules;
