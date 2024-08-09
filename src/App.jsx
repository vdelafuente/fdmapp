import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateUserProfile from "./pages/create-user-profile/CreateUserProfile";
import CreateAServiceContext from "./pages/create-a-service-context/CreateAServiceContext";
import CreateAnApplication from "./pages/create-an-application/CreateAnApplication";
import CreateApplicationContext from "./pages/create-application-context/CreateApplicationContext";
import CreateDataSource from "./pages/create-data-source/CreateDataSource";
import CreateDataSecurityProfile from "./pages/create-data-security-profile/CreateDataSecurityProfile";
import RequestDataProduct from "./components/request-data-product/RequestDataProduct";
import Layout from "./shared/layout/Layout";
import Home from "./pages/home/Home";
import BusinessObjects from "./pages/business-objects/BusinessObjects";
import { AuthContext } from "./context/AuthContext";

const router = (auth) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout auth={auth} />}>
        <Route index element={<Home />} />
        <Route path="create-user-profile" element={<CreateUserProfile />} />
        <Route
          path="create-a-service-context"
          element={<CreateAServiceContext />}
        />
        <Route path="create-an-application" element={<CreateAnApplication />} />
        <Route
          path="create-application-context"
          element={<CreateApplicationContext />}
        />
        <Route path="create-data-source" element={<CreateDataSource />} />
        <Route
          path="create-data-security-profile"
          element={<CreateDataSecurityProfile />}
        />
        <Route path="request-data-product" element={<RequestDataProduct />} />
        <Route path="business-objects" element={<BusinessObjects />} />
      </Route>
    )
  );

function App() {
  const _auth = JSON.parse(sessionStorage.getItem("auth"));
  const { setAuth } = React.useContext(AuthContext);

  React.useEffect(() => {
    setAuth(_auth || null);
  }, []);

  return <RouterProvider router={router(_auth)} />;
}

export default App;
