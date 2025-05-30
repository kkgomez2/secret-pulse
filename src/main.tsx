import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Create from "./pages/Create.tsx";
import CreateSurvey from "./pages/CreateSurvey.tsx";
import Results from "./pages/Results.tsx";

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
  },
  {
    path: "/results",
    Component: Results
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
