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
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/services/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "show-all",
        element: <AllServices></AllServices>,
      },
    ],
  },
]);

export default router;
