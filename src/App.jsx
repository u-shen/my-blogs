import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NBlogs from "./components/NBlogs/NBlogs";
import Blog from "./components/Blog/Blogs";
import Whoami from "./components/Whoami/Whoami";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/whoami",
          element: <Whoami />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/NBlogs",
          element: <NBlogs />,
        },
        {
          path: "/Blogs/:BlogsId",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
