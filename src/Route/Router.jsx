import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Form/Register";
import Login from "../Pages/Form/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Services from "../Pages/Services/Services";
import AllServices from "../Pages/Services/AllServices";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import AddService from "../Pages/Form/AddService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageServices from "../Pages/ManageServices/ManageServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import UpdateService from "../Pages/Form/UpdateService";
import UpdateBooking from "../Pages/UpdateBooking/UpdateBooking";
import MyProvideServices from "../Pages/Myservices/MyProvideServices";
import Reviews from "../Pages/Reviews/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/review",
        element: <Reviews></Reviews>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/services/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/services/${params.id}`),
      },
      {
        path: "/updateBooking/:id",
        element: <UpdateBooking></UpdateBooking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/bookings/${params.id}`),
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/show-all",
        element: <AllServices></AllServices>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/myServices",
        element: <MyProvideServices></MyProvideServices>,
      },
    ],
  },
]);

export default router;
