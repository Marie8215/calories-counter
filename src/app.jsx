import { Layout } from "./components/layout/layout";
import { RouterProvider, createBrowserRouter } from "react-router";
import { CaloriesPage } from "./components/caloriesPage/calories-page";
import { Blog } from "./components/blog/blog";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Authentication } from "./components/authentication/authentication";
import styles from "./app.module.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CaloriesPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/login",
    element: <Authentication />,
  },
]);

export const App = () => {
  function countDailyNorm(profile) {
    let calories =
      profile.gender === "male"
        ? 88.36 +
          13.4 * profile.weight +
          4.8 * profile.height -
          5.7 * profile.age
        : 447.6 +
          9.2 * profile.weight +
          3.1 * profile.height -
          4.3 * profile.age;

    let dailyNorm = {
      proteins: Math.floor((calories * 0.25) / 4),
      fats: Math.floor((calories * 0.25) / 9),
      carbohydrates: Math.floor((calories * 0.5) / 4),
      calories: Math.floor(calories),
    };

    return dailyNorm;
  }

  return (
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  );
};
