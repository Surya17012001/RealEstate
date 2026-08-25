import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Building2,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { useRealEstate } from "../context/RealEstateContext";

const navItems = [
  {
    label: "Buy",
    to: "/properties?purpose=Sale",
  },
  {
    label: "Rent",
    to: "/properties?purpose=Rent",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Agents",
    to: "/agents",
  },
  {
    label: "About",
    to: "/about",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { settings } = useRealEstate();

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link
          to="/"
          onClick={closeMobile}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Building2 size={22} />
          </div>

          <div>
            <p className="text-lg font-bold leading-none text-slate-900">
              {settings.logoText}
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-400">
              Real Estate
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/admin/login"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            List Property
          </Link>
        </div>

        {/* Mobile button */}

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-lg p-2 text-slate-700 lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `border-b border-slate-100 px-2 py-4 text-sm font-medium ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={closeMobile}
                className="mt-4 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700"
              >
                Contact
              </Link>

              <Link
                to="/admin/login"
                onClick={closeMobile}
                className="mt-3 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                List Property
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;