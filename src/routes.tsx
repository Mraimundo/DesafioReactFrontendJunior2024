import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Tasks } from "./components/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "all", element: <Tasks /> },
      { path: "active", element: <Tasks /> },
      { path: "completed", element: <Tasks /> },
    ],
  },
]);
