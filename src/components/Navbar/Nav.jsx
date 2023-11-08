import { Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../../assets/localTour.png";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src={logo}
            className="w-20 h-20 rounded-full shadow-md hover:scale-110 transition-transform transform duration-300"
            alt="local tour website image"
          />
          <span className="text-lg font-semibold text-indigo-700 ml-2 ">
            Local Tours and Guide
          </span>
        </Navbar.Brand>
        <div className="flex p-4 md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          {user?.email && (
            <Link to="/manageServices">
              <Navbar.Link>Manage Services</Navbar.Link>
            </Link>
          )}
          <Navbar.Link href="/">Services</Navbar.Link>
          {user?.email ? (
            <Link>
              <Navbar.Link onClick={handleLogOut}>Logout</Navbar.Link>
            </Link>
          ) : (
            <Link to="login">
              <Navbar.Link>Login</Navbar.Link>
            </Link>
          )}
          <Navbar.Link>
            {user?.email && (
              <Navbar.Link>
                <Dropdown label="Dashboard" inline dismissOnClick={false}>
                  <Link to="/addService">
                    <Dropdown.Item>Add Services</Dropdown.Item>
                  </Link>
                  <Link to="/mySchedules">
                    <Dropdown.Item>My Schedules</Dropdown.Item>
                  </Link>
                  <Dropdown.Item>My Services</Dropdown.Item>
                </Dropdown>
              </Navbar.Link>
            )}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
