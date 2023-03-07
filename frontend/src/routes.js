import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import Buses from "./pages/Buses/Buses";
import NotFound from "./pages/Page404";
import DashboardApp from "./pages/DashboardApp";
import AddBus from "./pages/AddBus/AddBus";
import UpdateBus from "./pages/Update/UpdateBus";
import Students from "./pages/Students/Students";
import AddStudent from "./pages/AddStudent/AddStudent";
import Driver from "./pages/Driver/Driver";
import Login from "./pages/Login/Login";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "buses", element: <Buses /> },
        { path: "bus/add", element: <AddBus /> },
        { path: "bus/update/:id", element: <UpdateBus /> },
        { path: "students", element: <Students /> },
        { path: "student/add", element: <AddStudent /> },
        { path: "drivers", element: <Driver /> },
      ],
    },

    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
