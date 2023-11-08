import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";

const MySchedules = () => {
  const [myBooking, setMyBooking] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/api/v1/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setMyBooking(data);
      });
  }, [url]);
  return (
    <div>
      {myBooking.length === 0 && (
        <p className="text-lg text-cyan-600">
          No bookings found.Booking Soon.....
        </p>
      )}
      {myBooking.map((booking) => (
        <BookingCard key={booking._id} booking={booking}></BookingCard>
      ))}
    </div>
  );
};

export default MySchedules;
