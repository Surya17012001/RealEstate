import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import {
  Building2,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Properties",
      path: "/admin/properties",
      icon: Building2,
    },
    {
      name: "Enquiries",
      path: "/admin/enquiries",
      icon: Users,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between bg-slate-950 px-5 text-white lg:hidden">
        <Link
          to="/admin"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950">
            R
          </div>

          <span className="font-bold">
            RealtyHub
          </span>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-lg p-2 hover:bg-slate-800"
        >
          {sidebarOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-slate-950 text-white transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-slate-800 px-6">
          <Link
            to="/admin"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-xl font-bold text-slate-950">
              R
            </div>

            <div>
              <h1 className="font-bold">
                Realty<span className="text-amber-500">Hub</span>
              </h1>

              <p className="text-xs text-slate-500">
                Admin Panel
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Management
          </p>

          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-amber-500 text-slate-950"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`
                  }
                >
                  <Icon size={19} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>

        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-800 p-4">

          <Link
            to="/"
            className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
          >
            <Home size={19} />
            View Website
          </Link>

          <button
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={19} />
            Logout
          </button>

        </div>
      </aside>

      {/* Main */}
      <main className="min-h-screen lg:ml-64">

        {/* Desktop Topbar */}
        <header className="hidden h-20 items-center justify-between border-b border-slate-200 bg-white px-8 lg:flex">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Admin Dashboard
            </h2>

            <p className="text-sm text-slate-500">
              Manage your real estate website
            </p>
          </div>

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
              A
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Admin
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>

          </div>
        </header>

        {/* Mobile spacing */}
        <div className="h-16 lg:hidden" />

        <div className="p-5 md:p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default AdminLayout;