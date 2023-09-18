import "./style.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import { Root } from "./pages/Root";
import Cards from "./pages/Cards";
import Addcard  from "./pages/Addcard";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Cards/>} />
        <Route path="/addcard" element={<Addcard/>} />
        
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
