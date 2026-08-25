import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public pages
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

// Admin pages
import AdminProperties from "./pages/admin/AdminProperties";
import AddProperty from "./pages/admin/AddProperty";
import EditProperty from "./pages/admin/EditProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================================
            PUBLIC WEBSITE
        ========================================== */}

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

          {/* IMPORTANT:
              Query parameters work automatically here.

              /properties
              /properties?purpose=Sale
              /properties?purpose=Sale&location=chennai
              /properties?purpose=Sale&location=chennai&type=House
          */}
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

        {/* =========================================
            ADMIN
        ========================================== */}

        <Route
          path="/admin"
          element={<AdminLayout />}
        >

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

        {/* =========================================
            404
        ========================================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;