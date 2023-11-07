import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner } from "flowbite-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner aria-label="Default status example" />;
  } else if (!user?.email) {
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
  }
  return children;
};
PrivateRoute.propTypes = { children: PropTypes.node };
export default PrivateRoute;
