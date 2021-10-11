// Layouts import
import AdminLayout from "../layout/AdminLayout"
import DefaultLayout from "../layout/DefaultLayout"

// Components import
import adminDashboard from "../views/dashboard/adminDashboard";

//Routes
const routes = [
  {
    path: "/admin",
    exact: true,
    layout: AdminLayout,
    component: adminDashboard,
  },
]

export default routes;