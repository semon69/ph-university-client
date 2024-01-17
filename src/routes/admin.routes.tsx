import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Dashboard",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Dashboard",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Dashboard",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
