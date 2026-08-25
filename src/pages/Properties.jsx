import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import PropertyCard from "../components/PropertyCard";
import { useRealEstate } from "../hooks/useRealEstate";

const Properties = () => {
  const { properties } = useRealEstate();

  const [search, setSearch] = useState("");
  const [purpose, setPurpose] = useState("All");
  const [type, setType] = useState("All");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        property.title
          ?.toLowerCase()
          .includes(searchText) ||
        property.location
          ?.toLowerCase()
          .includes(searchText);

      const matchesPurpose =
        purpose === "All" ||
        property.purpose === purpose;

      const matchesType =
        type === "All" ||
        property.type === type;

      return (
        matchesSearch &&
        matchesPurpose &&
        matchesType
      );
    });
  }, [properties, search, purpose, type]);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Properties
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Find Your Perfect Property
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            Explore our latest properties available for sale
            and rent.
          </p>

        </div>
      </section>

      {/* FILTERS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="grid gap-4 md:grid-cols-4">

            {/* SEARCH */}
            <div className="relative md:col-span-2">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search property or location..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-amber-500"
              />

            </div>

            {/* PURPOSE */}
            <select
              value={purpose}
              onChange={(e) =>
                setPurpose(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
            >
              <option value="All">
                Buy / Rent
              </option>

              <option value="Sale">
                For Sale
              </option>

              <option value="Rent">
                For Rent
              </option>
            </select>

            {/* TYPE */}
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
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

          </div>

        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Available Properties
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredProperties.length} properties found
            </p>
          </div>

          <SlidersHorizontal
            size={20}
            className="text-slate-400"
          />

        </div>

        {filteredProperties.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

            <h3 className="text-xl font-bold text-slate-900">
              No properties found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>

          </div>

        )}

      </section>

    </main>
  );
};

export default Properties;