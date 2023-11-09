import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Dropdown } from "flowbite-react";

const MySchedules = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [othersBooking, setOthersBooking] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:5000/api/v1/bookings?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setMyBooking(data);
        setIsLoading(false);
      });
  }, [url]);
  const othersBookingUrl = `http://localhost:5000/api/v1/bookings?providerEmail=${user?.email}`;
  useEffect(() => {
    fetch(othersBookingUrl, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setOthersBooking(data);
        setIsLoading(false);
      });
  }, [othersBookingUrl]);
  return (
    <div className="py-2">
      <div>
        <h2 className="text-2xl text-center font-bold p-2">
          My Booking: {myBooking.length}
        </h2>
        {isLoading ? (
          <LoadingSpinner />
        ) : myBooking.length === 0 ? (
          <p className="text-lg text-center py-4 text-red-600">
            No bookings found.Booking Soon.....
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 justify-center">
            {myBooking.map((booking) => (
              <BookingCard key={booking._id} booking={booking}></BookingCard>
            ))}
          </div>
        )}
        <hr className="mt-2" />
      </div>

      <div>
        <h2 className="text-2xl text-center font-bold p-2">Others Booking</h2>
        <div className="">
          {isLoading ? (
            <LoadingSpinner />
          ) : othersBooking.length === 0 ? (
            <p className="text-lg text-center text-red-600">
              No bookings found.Booking Soon.....
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 justify-center">
              {othersBooking.map((booking) => (
                <BookingCard key={booking._id} booking={booking}></BookingCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
