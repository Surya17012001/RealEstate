import {
  Building2,
  Home,
  KeyRound,
  Star,
  Users,
  FolderKanban,
  Plus,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useRealEstate } from "../../hooks/useRealEstate";

const AdminDashboard = () => {
  const { statistics, properties } = useRealEstate();

  const cards = [
    {
      title: "Total Properties",
      value: statistics.totalProperties,
      icon: Building2,
      description: "All listed properties",
    },
    {
      title: "For Sale",
      value: statistics.saleProperties,
      icon: Home,
      description: "Properties available for sale",
    },
    {
      title: "For Rent",
      value: statistics.rentalProperties,
      icon: KeyRound,
      description: "Properties available for rent",
    },
    {
      title: "Featured",
      value: statistics.featuredProperties,
      icon: Star,
      description: "Featured properties",
    },
    {
      title: "Projects",
      value: statistics.totalProjects,
      icon: FolderKanban,
      description: "Real estate projects",
    },
    {
      title: "Agents",
      value: statistics.totalAgents,
      icon: Users,
      description: "Registered agents",
    },
  ];

  const recentProperties = properties.slice(0, 5);

  return (
    <div>

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Welcome back. Here's what's happening with your
            real estate portal.
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

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {card.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {card.value}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Icon size={23} />
                </div>

              </div>

              <p className="mt-4 text-xs text-slate-400">
                {card.description}
              </p>
            </div>
          );
        })}

      </div>

      {/* Recent Properties */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <h2 className="font-bold text-slate-900">
              Recent Properties
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Recently added properties
            </p>
          </div>

          <Link
            to="/admin/properties"
            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View All
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="divide-y divide-slate-100">

          {recentProperties.length === 0 ? (
            <div className="px-6 py-12 text-center text-sm text-slate-500">
              No properties found.
            </div>
          ) : (
            recentProperties.map((property) => (
              <div
                key={property.id}
                className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center"
              >

                <img
                  src={property.image}
                  alt={property.title}
                  className="h-20 w-full rounded-xl object-cover sm:w-28"
                />

                <div className="flex-1">

                  <h3 className="font-semibold text-slate-900">
                    {property.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {property.location}
                  </p>

                </div>

                <div className="text-left sm:text-right">

                  <p className="font-bold text-slate-900">
                    ₹
                    {Number(property.price || 0).toLocaleString(
                      "en-IN"
                    )}
                  </p>

                  <span
                    className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      property.purpose === "Sale"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {property.purpose}
                  </span>

                </div>

              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;