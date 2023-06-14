import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content from "../components/Content/Content";
import classes from "../components/Content/Content.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/categories",
        element: <h1 className={classes.title}>Categories</h1>,
      },

      {
        path: "/vacancies",
        element: <h1 className={classes.title}>Vacancies</h1>,
      },
      {
        path: "/companies",
        element: <h1 className={classes.title}>Companies</h1>,
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
