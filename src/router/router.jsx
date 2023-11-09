import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllJobs from "../components/AllJobs/AllJobs";
import JobDetails from "../components/JobsCards/JobDetails";
import AppliedJobs from "../pages/Application/AppliedJobs";
import AddJob from "../pages/Add Job/AddJob";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import UpdateJob from "../pages/updateJob/Update";
import SingleJobUpdate from "../pages/updateJob/singleJobUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://career-magnet-server-c39eufv93-islam-rafikuls-projects.vercel.app/jobDetails/:${params.id}`
          ),
      },
      {
        path: "appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            {" "}
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "updateJob",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivateRoute>
            <SingleJobUpdate></SingleJobUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://career-magnet-server-c39eufv93-islam-rafikuls-projects.vercel.app/updateJob/:${params.id}`
          ),
      },
    ],
  },
]);

export default router;
