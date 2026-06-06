import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Page404 from "../components/common/Page404/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Page404></Page404>,
    children: [
      {
        index: true,
        element: <h1>Hello cat</h1>,
      },
    ],
  },
]);
