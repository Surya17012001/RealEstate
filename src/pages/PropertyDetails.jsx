import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  MapPin,
  Maximize,
} from "lucide-react";

import { useRealEstate } from "../hooks/useRealEstate";

const PropertyDetails = () => {
  const { id } = useParams();

  const { getProperty } = useRealEstate();

  const property = getProperty(id);

  if (!property) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Property Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            This property may have been deleted or is no longer available.
          </p>

          <Link
            to="/properties"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-950"
          >
            <ArrowLeft size={18} />
            Back to Properties
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* IMAGE */}
      <section className="relative h-[450px] bg-slate-900">

        {property.image ? (
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            No Image Available
          </div>
        )}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-6 py-8">

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

        </div>

      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* MAIN */}
          <div className="lg:col-span-2">

            <div className="mb-6 flex flex-wrap gap-2">

              {property.purpose && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                  For {property.purpose}
                </span>
              )}

              {property.type && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {property.type}
                </span>
              )}

            </div>

            <h1 className="text-4xl font-bold text-slate-900">
              {property.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-slate-500">

              <MapPin size={18} />

              {property.location}

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div className="rounded-xl bg-white p-5 shadow-sm">

                <BedDouble
                  size={22}
                  className="text-amber-500"
                />

                <p className="mt-3 text-xl font-bold">
                  {property.bedrooms}
                </p>

                <p className="text-sm text-slate-500">
                  Bedrooms
                </p>

              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">

                <Bath
                  size={22}
                  className="text-amber-500"
                />

                <p className="mt-3 text-xl font-bold">
                  {property.bathrooms}
                </p>

                <p className="text-sm text-slate-500">
                  Bathrooms
                </p>

              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">

                <Maximize
                  size={22}
                  className="text-amber-500"
                />

                <p className="mt-3 text-xl font-bold">
                  {property.area}
                </p>

                <p className="text-sm text-slate-500">
                  Sq. Ft.
                </p>

              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Property Type
                </p>

                <p className="mt-3 font-bold">
                  {property.type}
                </p>

              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold text-slate-900">
                About this Property
              </h2>

              <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
                {property.description ||
                  "No description available."}
              </p>

            </div>

          </div>

          {/* PRICE CARD */}
          <aside>

            <div className="sticky top-24 rounded-2xl bg-white p-7 shadow-lg">

              <p className="text-sm text-slate-500">
                Price
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                ₹{Number(property.price).toLocaleString("en-IN")}
              </h2>

              {property.purpose === "Rent" && (
                <p className="mt-1 text-sm text-slate-500">
                  per month
                </p>
              )}

              <button
                type="button"
                className="mt-7 w-full rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
              >
                Contact Agent
              </button>

              <button
                type="button"
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Schedule Visit
              </button>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default PropertyDetails;