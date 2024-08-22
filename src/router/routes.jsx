import { createBrowserRouter } from "react-router-dom";
import MobileInfo from "../components/MobileInfo";
import { Main } from "../layout/Main";
import { MainLayout } from "../layout/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import { ProfilePage } from "../pages/ProfilePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/mobileInfo/:PhoneId",
        element: <MobileInfo />,
      },
    ],
  },
]);
