import { useContext, useState } from "react";
import { Avatar, Button, Card, Label, Modal, TextInput } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const {
    serviceName,
    providerName,
    providerImage,
    providerEmail,
    serviceDescription,
    serviceArea,
    serviceImage,
    servicePrice,
  } = service;
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  const handleBooking = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const address = e.target.address.value;

    const bookingInfo = {
      serviceImage,
      serviceName,
      serviceDescription,
      userEmail: user.email,
      providerName,
      providerImage,
      providerEmail,
      date,
      address,
    };
    console.log(bookingInfo);
    fetch("http://localhost:5000/api/v1/create-booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("booking successfully added");
        }
      });
  };
  return (
    <div className="py-10 flex justify-center">
      <Card className="max-w-xl">
        <div className="flex flex-col items-center pb-10">
          <Avatar img={providerImage} rounded bordered />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            ProviderName:
            <span className="text-xl ml-2 fort-bold text-blue-800 ">
              {providerName}
            </span>
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Location:
            <span className="text-lg ml-2 text-blue-600 ">{serviceArea}</span>
          </span>
          <div className="mt-4 w-full justify-center flex space-x-3 lg:mt-6">
            <Link>
              <Button onClick={() => setOpenModal(true)}>Book Now</Button>
            </Link>
          </div>
        </div>
      </Card>
      <div className="flex justify-between"></div>
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-2 w-full">
            <div className="w-full">
              <form onSubmit={handleBooking}>
                <div>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="" value="ServiceImage" />
                      </div>
                      <TextInput
                        id="serviceName"
                        defaultValue={serviceImage}
                        type="text"
                        readOnly
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="" value="ProviderEmail" />
                      </div>
                      <TextInput
                        id="serviceName"
                        defaultValue={providerEmail}
                        type="text"
                        required
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="" value="ServiceName" />
                      </div>
                      <TextInput
                        id="serviceName"
                        defaultValue={serviceName}
                        type="text"
                        required
                        readOnly
                      />
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="" value="ServicePrice" />
                      </div>
                      <TextInput
                        id="serviceName"
                        defaultValue={servicePrice}
                        type="text"
                        required
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="" value="Service Taking Date" />
                      </div>
                      <TextInput
                        id="serviceName"
                        type="date"
                        name="date"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="" value="Address" />
                      </div>
                      <TextInput
                        id="serviceName"
                        name="address"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="" value="UserEmail" />
                    </div>
                    <TextInput
                      id="userEmail"
                      name="address"
                      defaultValue={user.email}
                      type="text"
                      required
                    />
                  </div>
                </div>

                <Button className="mt-5" type="submit">
                  Add to Purchase
                </Button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ServicesDetails;
