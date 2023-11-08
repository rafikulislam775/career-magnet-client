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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/jobDetails/${params.id}`),
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
