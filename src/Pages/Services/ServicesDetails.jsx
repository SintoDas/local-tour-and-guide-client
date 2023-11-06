import { useContext, useState } from "react";
// import { Avatar, Button, Card, Modal } from "flowbite-react";
import { Avatar, Button, Card, Label, Modal, TextInput } from "flowbite-react";
import { Form, Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const {
    serviceName,
    serviceImage,
    serviceProvider,
    serviceDescription,
    servicePrice,
  } = service;
  const providerName = serviceProvider[0].name.toLowerCase().replace(/\s/g, "");
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
    const providerEmail = e.target.provider.value;

    const bookingInfo = {
      serviceImage,
      serviceName,
      userEmail: user.email,
      serviceProviderName: serviceProvider[0].name,
      serviceProviderImage: serviceProvider[0].image,
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
          alert("booking successfully inserted");
        }
      });
  };
  return (
    <div className="py-10 flex justify-center">
      <Card
        className="w-full max-w-full h-full"
        imgSrc={serviceImage}
        horizontal
      >
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>
        </div>
        <div className="flex flex-wrap gap-2">
          <Avatar img={serviceProvider[0].image} rounded bordered />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceProvider[0].name}
          </h5>
        </div>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {serviceDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {servicePrice}
          </span>
          <Link>
            <Button onClick={() => setOpenModal(true)}>Book Now</Button>
          </Link>
        </div>
      </Card>

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
                        <Label htmlFor="" value="userEmail" />
                      </div>
                      <TextInput
                        id="serviceName"
                        defaultValue={user?.email}
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
                        defaultValue={"12/03/10"}
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
                        defaultValue={"Bangladesh"}
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2 block">
                    <Label htmlFor="email" value="ProviderEmail" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder={user}
                    name="provider"
                    value={`${providerName}.@gmail.com`}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    readOnly
                  />
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
