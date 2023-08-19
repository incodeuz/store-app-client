import Home from "../pages/Home";
import About from "../pages/About";
import Generic from "../components/Generic";
import Students from "../pages/Students";
import Dashboard from "../pages/Dashboard";
import Teachers from "../pages/Teachers";
import Test from "../pages/Test";

export const sidebarRoutes = [
  {
    title: "Home",
    to: "/",
    Element: Home,
    path: "/",
    icon: "bx bx-home",
  },
  {
    title: "Students",
    to: "students",
    Element: Students,
    path: "students",
    icon: "bx bx-home",
  },
  {
    title: "Teachers",
    to: "teachers",
    Element: Teachers,
    path: "teachers",
    icon: "bx bx-home",
  },
  {
    title: "Contacts",
    to: "contacts",
    Element: Test,
    path: "contacts",
    icon: "bx bx-home",
  },
  {
    title: "Dashboard",
    to: "dashboard",
    Element: Dashboard,
    path: "dashboard",
    icon: "bx bx-home",
  },
];
