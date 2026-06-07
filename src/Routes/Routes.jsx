import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Page404 from "../components/common/Page404/Page404";
import Home from "../pages/Home/Home";
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Page404></Page404>,
    children: [
      {
        index: true,
        loader: () => fetch("/appData.json"),
        Component: Home,
        HydrateFallback: LoadingSpinner,
      },
      {
        path: "apps",
        loader: () => fetch("/appData.json"),
        Component: Apps,
        HydrateFallback: LoadingSpinner,
      },
      {
        path: "appDetails/:id",
        loader: () => fetch("/appData.json"),
        Component: AppDetails,
        HydrateFallback: LoadingSpinner,
      },
    ],
  },
]);
