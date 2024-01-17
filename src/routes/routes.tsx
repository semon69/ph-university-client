import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import About from "../pages/About"
import Contact from "../pages/Contact"
import AdminDashboard from "../pages/admin/AdminDashboard"
import CreateStudent from "../pages/admin/CreateStudent"
import CreateAdmin from "../pages/admin/CreateAdmin"
import CreateFaculty from "../pages/admin/CreateFaculty"

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element:  <About />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: 'dashboard',
                element:  <AdminDashboard />
            },
            {
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                path: 'create-admin',
                element:  <CreateAdmin />
            },
            {
                path: 'create-faculty',
                element: <CreateFaculty />
            }
        ]
    }
])

export default  routers