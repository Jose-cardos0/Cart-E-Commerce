import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Outlets } from "./Components/Outlets";

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
    ],
  },
]);

export default router;
