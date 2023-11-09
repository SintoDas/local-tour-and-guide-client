import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";
import ClientBooking from "../../components/ClientBooking/ClientBooking";

const OthersBooking = () => {
  const [othersBooking, setOthersBooking] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const othersBookingUrl = `https://local-tours-and-guide-server.vercel.app/api/v1/bookings?providerEmail=${user?.email}`;
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
          Others Booking :{othersBooking.length}
        </h2>
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
                <ClientBooking
                  key={booking._id}
                  booking={booking}
                ></ClientBooking>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OthersBooking;
