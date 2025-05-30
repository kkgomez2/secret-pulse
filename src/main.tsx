import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
// import "./index.css";
import App from "./App.tsx";
import Create from "./pages/Create.tsx";
import CreateSurvey from "./pages/CreateSurvey.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/create",
    Component: Create,
  },
  {
    path: "/test",
    Component: CreateSurvey
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
