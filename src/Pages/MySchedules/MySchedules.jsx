import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import OthersBooking from "../OthersBooking/OthersBooking";

const MySchedules = () => {
  const [myBooking, setMyBooking] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://local-tours-and-guide-server.vercel.app/api/v1/bookings?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setMyBooking(data);
        setIsLoading(false);
      });
  }, [url]);

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
      <OthersBooking></OthersBooking>
    </div>
  );
};

export default MySchedules;
