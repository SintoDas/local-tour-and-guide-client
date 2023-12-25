import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    serviceArea,
  } = useLoaderData();
  console.log(_id);
  const handleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const providerName = user ? user.displayName : null;
    const providerEmail = form.email.value;
    const serviceDescription = form.description.value;
    const servicePrice = form.price.value;
    const serviceArea = form.area.value;

    const serviceInfo = {
      serviceImage,
      serviceName,
      serviceDescription,
      providerName,
      providerEmail,
      servicePrice,
      serviceArea,
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
    <div className="flex py-5 justify-center items-center">
      <form onSubmit={handleService} className="flex w-1/2 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pictureUrl" value="Picture URL of the Service" />
          </div>
          <TextInput
            id="pictureUrl"
            defaultValue={serviceImage}
            name="serviceImage"
            type="text"
            required
            shadow
          />
        </div>
        <div></div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="serviceName" value="Service Name" />
          </div>
          <TextInput
            id="serviceName"
            name="serviceName"
            defaultValue={serviceName}
            type="text"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="providerName" value="Provider Name" />
          </div>
          <TextInput
            id="serviceName"
            readOnly
            defaultValue={user?.displayName}
            type="text"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="providerName" value="Provider Image" />
          </div>
          <TextInput
            id="providerImage"
            readOnly
            defaultValue={user?.photoURl}
            type="text"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <TextInput
            id="description"
            defaultValue={serviceDescription}
            name="description"
            type="text"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@.com"
            defaultValue={user?.email}
            value={user?.email} // Replace with actual email from Firebase
            readOnly
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput
            id="price"
            defaultValue={servicePrice}
            name="price"
            type="number"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="serviceArea" value="Service Area" />
          </div>
          <TextInput
            id="serviceArea"
            defaultValue={serviceArea}
            name="area"
            type="text"
            required
            shadow
          />
        </div>

        <Button type="submit">Update Service</Button>
      </form>
    </div>
  );
};

export default UpdateService;
