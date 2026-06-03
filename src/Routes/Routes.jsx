import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello world</h1>,
    errorElement: <h1 className="text-center">Page not found</h1>,
  },
]);
