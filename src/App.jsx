import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Agents from "./pages/Agents";
import NotFound from "./pages/NotFound";

import AdminProperties from "./pages/admin/AdminProperties";
import AddProperty from "./pages/admin/AddProperty";
import EditProperty from "./pages/admin/EditProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            CLIENT WEBSITE
        ========================== */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/properties/:id"
            element={<PropertyDetails />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />

          <Route
            path="/agents"
            element={<Agents />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

        {/* =========================
            ADMIN
        ========================== */}

        <Route
          path="/admin"
          element={<AdminLayout />}
        >

          <Route
            index
            element={
              <Navigate
                to="/admin/properties"
                replace
              />
            }
          />

          <Route
            path="properties"
            element={<AdminProperties />}
          />

          <Route
            path="properties/add"
            element={<AddProperty />}
          />

          <Route
            path="properties/edit/:id"
            element={<EditProperty />}
          />

        </Route>

        {/* =========================
            404
        ========================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;