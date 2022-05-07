import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import "tw-elements";
import { Route, Routes } from "react-router-dom";
import InventoryDetails from "./Pages/Services/InventoryDetails/InventoryDetails";
import ManageInventories from "./Pages/Services/ManageInventories/ManageInventories";
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";
import PrivateRoute from "./Pages/Auth/PrivateRoute/PrivateRoute";
import MyItems from "./Pages/Services/MyItems/MyItems";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import InventoryReport from "./Pages/InventoryReport/InventoryReport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manageinventories" element={<ManageInventories />} />

        <Route
          path="/manageinventories/*"
          element={
            <PrivateRoute>
              <ManageInventories />
            </PrivateRoute>
          }
        />

        <Route
          path="inventorydetails/:id"
          element={
            <PrivateRoute>
              <InventoryDetails />
            </PrivateRoute>
          }
        />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventoryreport" element={<InventoryReport />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
