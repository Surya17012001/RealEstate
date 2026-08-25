// src/pages/admin/AdminProperties.jsx

import { useMemo, useState } from "react";

import {
  Edit3,
  Eye,
  Plus,
  Search,
  Star,
  Trash2,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useRealEstate } from "../../hooks/useRealEstate";

const AdminProperties = () => {
  const {
    properties,
    deleteProperty,
  } = useRealEstate();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [purposeFilter, setPurposeFilter] = useState("All");
  const [deleteId, setDeleteId] = useState(null);

  /*
   * FILTER PROPERTIES
   */
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        property.title?.toLowerCase().includes(searchText) ||
        property.location?.toLowerCase().includes(searchText) ||
        property.type?.toLowerCase().includes(searchText);

      const matchesType =
        typeFilter === "All" ||
        property.type === typeFilter;

      const matchesPurpose =
        purposeFilter === "All" ||
        property.purpose === purposeFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesPurpose
      );
    });
  }, [
    properties,
    search,
    typeFilter,
    purposeFilter,
  ]);

  /*
   * DELETE PROPERTY
   */
  const handleDelete = () => {
    if (!deleteId) return;

    deleteProperty(Number(deleteId));

    setDeleteId(null);
  };

  /*
   * FORMAT PRICE
   */
  const formatPrice = (price) => {
    const value = Number(price || 0);

    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Properties
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage all properties listed on your website.
          </p>
        </div>

        <Link
          to="/admin/properties/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          <Plus size={18} />
          Add Property
        </Link>

      </div>

      {/* FILTER CARD */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* SEARCH */}
          <div className="relative lg:col-span-2">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search properties..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />

          </div>

          {/* TYPE */}
          <select
            value={typeFilter}
            onChange={(event) =>
              setTypeFilter(event.target.value)
            }
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="All">
              All Types
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="House">
              House
            </option>

            <option value="Commercial">
              Commercial
            </option>

            <option value="Land">
              Land
            </option>
          </select>

          {/* PURPOSE */}
          <select
            value={purposeFilter}
            onChange={(event) =>
              setPurposeFilter(event.target.value)
            }
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="All">
              Sale & Rent
            </option>

            <option value="Sale">
              For Sale
            </option>

            <option value="Rent">
              For Rent
            </option>
          </select>

        </div>

        {/* FILTER INFO */}
        <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filteredProperties.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">
              {properties.length}
            </span>{" "}
            properties
          </p>

          {(search ||
            typeFilter !== "All" ||
            purposeFilter !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setTypeFilter("All");
                setPurposeFilter("All");
              }}
              className="inline-flex items-center gap-1 self-start font-medium text-amber-600 hover:text-amber-700"
            >
              <X size={15} />
              Clear Filters
            </button>
          )}

        </div>

      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className="border-b border-slate-200 bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Property
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Purpose
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Details
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-slate-100">

              {filteredProperties.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-16 text-center"
                  >
                    <div className="text-slate-400">
                      <Search
                        size={40}
                        className="mx-auto mb-3"
                      />

                      <p className="font-medium text-slate-600">
                        No properties found
                      </p>

                      <p className="mt-1 text-sm">
                        Try changing your search or filters.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredProperties.map((property) => (
                  <tr
                    key={property.id}
                    className="transition hover:bg-slate-50"
                  >

                    {/* PROPERTY */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-4">

                        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">

                          {property.image ? (
                            <img
                              src={property.image}
                              alt={property.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-xs text-slate-400">
                              No Image
                            </div>
                          )}

                          {property.featured && (
                            <div className="absolute left-1 top-1 rounded-full bg-amber-500 p-1 text-white">
                              <Star
                                size={11}
                                fill="currentColor"
                              />
                            </div>
                          )}

                        </div>

                        <div className="min-w-0">

                          <p className="truncate font-semibold text-slate-900">
                            {property.title}
                          </p>

                          <p className="mt-1 truncate text-sm text-slate-500">
                            {property.location}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* TYPE */}
                    <td className="px-6 py-4">

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {property.type}
                      </span>

                    </td>

                    {/* PURPOSE */}
                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          property.purpose === "Sale"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {property.purpose}
                      </span>

                    </td>

                    {/* PRICE */}
                    <td className="px-6 py-4">

                      <p className="font-bold text-slate-900">
                        {formatPrice(property.price)}
                      </p>

                      {property.purpose === "Rent" && (
                        <p className="mt-1 text-xs text-slate-400">
                          per month
                        </p>
                      )}

                    </td>

                    {/* DETAILS */}
                    <td className="px-6 py-4">

                      <div className="text-sm text-slate-500">

                        {property.bedrooms > 0 && (
                          <span>
                            {property.bedrooms} Beds
                          </span>
                        )}

                        {property.bathrooms > 0 && (
                          <span>
                            {" • "}
                            {property.bathrooms} Baths
                          </span>
                        )}

                        {property.area && (
                          <span>
                            {" • "}
                            {property.area} sq.ft
                          </span>
                        )}

                      </div>

                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <Link
                          to={`/properties/${property.id}`}
                          target="_blank"
                          title="View Property"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye size={16} />
                        </Link>

                        <Link
                          to={`/admin/properties/edit/${property.id}`}
                          title="Edit Property"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
                        >
                          <Edit3 size={16} />
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            setDeleteId(property.id)
                          }
                          title="Delete Property"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* MOBILE CARDS */}
      <div className="space-y-4 lg:hidden">

        {filteredProperties.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

            <Search
              size={40}
              className="mx-auto mb-3 text-slate-300"
            />

            <p className="font-medium text-slate-600">
              No properties found
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Try changing your search or filters.
            </p>

          </div>
        ) : (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >

              {/* IMAGE */}
              <div className="relative h-52">

                {property.image ? (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400">
                    No Image
                  </div>
                )}

                {property.featured && (
                  <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                    <Star
                      size={12}
                      fill="currentColor"
                    />
                    Featured
                  </div>
                )}

                <div
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    property.purpose === "Sale"
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {property.purpose}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-bold text-slate-900">
                  {property.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {property.location}
                </p>

                <p className="mt-4 text-xl font-bold text-slate-900">
                  {formatPrice(property.price)}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">

                  {property.type && (
                    <span className="rounded-lg bg-slate-100 px-3 py-2">
                      {property.type}
                    </span>
                  )}

                  {property.bedrooms > 0 && (
                    <span className="rounded-lg bg-slate-100 px-3 py-2">
                      {property.bedrooms} Beds
                    </span>
                  )}

                  {property.bathrooms > 0 && (
                    <span className="rounded-lg bg-slate-100 px-3 py-2">
                      {property.bathrooms} Baths
                    </span>
                  )}

                  {property.area && (
                    <span className="rounded-lg bg-slate-100 px-3 py-2">
                      {property.area} sq.ft
                    </span>
                  )}

                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">

                  <Link
                    to={`/properties/${property.id}`}
                    target="_blank"
                    className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    <Eye size={14} />
                    View
                  </Link>

                  <Link
                    to={`/admin/properties/edit/${property.id}`}
                    className="flex items-center justify-center gap-1 rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400"
                  >
                    <Edit3 size={14} />
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setDeleteId(property.id)
                    }
                    className="flex items-center justify-center gap-1 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))
        )}

      </div>

      {/* DELETE MODAL */}
      {deleteId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-5">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={22} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Delete Property?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Are you sure you want to delete this property?
              This action cannot be undone.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => setDeleteId(null)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Delete Property
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminProperties;