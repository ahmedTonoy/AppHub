import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Page404 from "../components/common/Page404/Page404";
import Home from "../pages/Home/Home";
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Page404></Page404>,
    children: [
      {
        index: true,
        Component: Home,
        HydrateFallback: LoadingSpinner,
      },
    ],
  },
]);
