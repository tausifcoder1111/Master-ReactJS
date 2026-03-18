import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

// React Element == Object == JSX
// const heading = <h1>JSX Heading</h1>
// console.log(heading)

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path : "/",
        element : <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>,
);
