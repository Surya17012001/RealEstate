import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import {
  Building2,
  Home,
  LogOut,
  Plus,
  Settings,
} from "lucide-react";

import { useRealEstate } from "../hooks/useRealEstate";

const AdminLayout = () => {
  const navigate = useNavigate();

  const {
    isAdminAuthenticated,
    logoutAdmin,
  } = useRealEstate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/");
  };

  /*
   * Frontend-only authentication.
   *
   * If you already have an AdminLogin page,
   * redirect unauthenticated users there.
   *
   * For now this keeps the admin dashboard accessible
   * so you can test CRUD on Vercel.
   */

  return (
    <div className="min-h-screen bg-slate-100">

      {/* =========================================
          ADMIN SIDEBAR
      ========================================== */}

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 bg-slate-950 text-white lg:block">

        {/* LOGO */}

        <div className="flex h-20 items-center border-b border-white/10 px-6">

          <Link
            to="/admin"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
              <Building2 size={22} />
            </div>

            <div>
              <p className="font-bold">
                RealtyHub
              </p>

              <p className="text-xs text-slate-400">
                Admin Panel
              </p>
            </div>

          </Link>

        </div>

        {/* NAVIGATION */}

        <nav className="space-y-2 p-4">

          <NavLink
            to="/admin/properties"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Building2 size={18} />
            Properties
          </NavLink>

          <NavLink
            to="/admin/properties/add"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Plus size={18} />
            Add Property
          </NavLink>

          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <Home size={18} />
            View Website
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <Settings size={18} />
            Settings
          </Link>

        </nav>

        {/* LOGOUT */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </aside>

      {/* =========================================
          MAIN AREA
      ========================================== */}

      <div className="lg:pl-64">

        {/* MOBILE HEADER */}

        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:hidden">

          <Link
            to="/admin"
            className="flex items-center gap-2 font-bold text-slate-900"
          >
            <Building2
              size={21}
              className="text-amber-500"
            />

            RealtyHub
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-slate-600"
          >
            Website
          </Link>

        </header>

        {/* PAGE */}

        <main className="min-h-screen p-4 sm:p-6 lg:p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;