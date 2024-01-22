import * as React from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./components/RootLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
