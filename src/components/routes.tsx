import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "./GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
