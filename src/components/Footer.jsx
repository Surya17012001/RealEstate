// src/components/Footer.jsx

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-xl font-bold text-slate-950">
                R
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Realty<span className="text-amber-500">Hub</span>
                </h2>

                <p className="text-xs text-slate-400">
                  Real Estate Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Discover your perfect property with RealtyHub. Buy, sell,
              and rent residential and commercial properties with confidence.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <FaTwitter size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 transition hover:text-amber-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Property
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/properties?type=Apartment"
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Apartments
                  <ArrowUpRight size={14} />
                </Link>
              </li>

              <li>
                <Link
                  to="/properties?type=Villa"
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Villas
                  <ArrowUpRight size={14} />
                </Link>
              </li>

              <li>
                <Link
                  to="/properties?type=House"
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Houses
                  <ArrowUpRight size={14} />
                </Link>
              </li>

              <li>
                <Link
                  to="/properties?type=Commercial"
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Commercial
                  <ArrowUpRight size={14} />
                </Link>
              </li>

              <li>
                <Link
                  to="/properties?type=Land"
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-500"
                >
                  Land & Plots
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-amber-500">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Our Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Chennai, Tamil Nadu
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-amber-500">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-slate-400 transition hover:text-amber-500"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-amber-500">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Email
                  </p>

                  <a
                    href="mailto:info@realtyhub.com"
                    className="mt-1 block text-sm text-slate-400 transition hover:text-amber-500"
                  >
                    info@realtyhub.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-slate-500">
            © {currentYear} RealtyHub. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/privacy"
              className="text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/admin"
              className="text-slate-500 transition hover:text-amber-500"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;