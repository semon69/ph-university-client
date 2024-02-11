import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Create Course",
    path: "create-Course",
    element: <CreateCourse />,
  },
];
