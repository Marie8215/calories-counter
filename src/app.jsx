import { Layout } from "./components/layout/layout";
import { RouterProvider, createBrowserRouter } from "react-router";
import { CaloriesPage } from "./components/caloriesPage/calories-page";
import { Blog } from "./components/blog/blog";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Authentication } from "./components/authentication/authentication";
// import styles from "./app.module.css";

const router = createBrowserRouter([
  { path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <CaloriesPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Authentication />, 
  },
]);

export const App = () => {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
};
