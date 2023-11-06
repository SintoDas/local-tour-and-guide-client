import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "flowbite-react";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
// import toast from "react-hot-toast";
// import SocialIcon from "../SocialIcon";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.photo.value;
    const accepted = e.target.terms.checked;
    if (password.length < 6) {
      alert("please provide a password at least 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      alert(
        "Please provide a password at least 6 characters with a upper case letter and special characters"
      );
      return;
    } else if (!accepted) {
      alert("Accepted our terms and conditions");
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, img).then(() => {
          alert("User created successfully");
          navigate("/login");
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center rounded-lg min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md  mt-4">
        <h2 className="text-xl text-center font-semibold text-blue-800 mb-2">
          Registration Now
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="enter your email address"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Photo URL</label>
            <input
              type="text"
              id="photoUrl"
              name="photo"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your photo url here..."
              required
            />
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-lg font-medium">Already have an account?</p>
            <Link to="/login">
              <p className="text-blue-400 text-lg font-bold underline">Login</p>
            </Link>
          </div>
          <input type="checkbox" name="terms" id="terms" />
          <label className="px-3">
            Accept our
            <a className="text-lg ml-2 underline text-blue-700" href="">
              terms and conditions
            </a>
          </label>

          <div className="mt-6">
            <Button
              type="submit"
              className="w-full text-white rounded-md py-2 px-4 hover:bg-orange-500"
            >
              Register
            </Button>
          </div>
        </form>
        <SocialIcon></SocialIcon>
      </div>
    </div>
  );
};

export default Register;
