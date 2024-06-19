import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import "./index.css";
import DishList from "./components/dishes/DishList";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      let data = useLoaderData() as { message: string };
      return <DishList />;
    },
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
