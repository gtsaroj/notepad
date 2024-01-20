import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import List from "./components/List/List";
import { MenuProvider } from "./Hooks/MenuContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "list/:id",
          element: <List />,
        },
      ],
    },
  ]);

  return(
  
  <RouterProvider router={router} />

  
  )

}

export default App;
