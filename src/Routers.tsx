import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Outlets } from "./Components/Outlets";
import { Details } from "./Pages/Detail";

const router = createBrowserRouter([
  {
    element: <Outlets />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
