import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "flowbite-react";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User Logged in successfully");
        // navigate the user
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl text-center font-semibold mb-4 text-blue-700">
            Login Now
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
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
            <div className="mb-4">
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

            <div className="flex items-center justify-between ">
              <p className="text-lg font-medium">Have an account?</p>
              <Link to="/register">
                <p className="text-blue-500 text-lg underline">Register</p>
              </Link>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-full  text-white rounded-md py-2 px-4 hover:bg-blue-500"
              >
                Login
              </Button>
            </div>
          </form>
          <SocialIcon></SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Login;
