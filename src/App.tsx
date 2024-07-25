import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./shared/layout/Layout";
import CreateUserProfile from "./pages/create-user-profile/CreateUserProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="create-user-profile" element={<CreateUserProfile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
