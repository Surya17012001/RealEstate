// src/components/PropertyCard.jsx

import { Link } from "react-router-dom";
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Maximize,
} from "lucide-react";
import { useState } from "react";

const PropertyCard = ({ property }) => {
  const [liked, setLiked] = useState(false);

  if (!property) {
    return null;
  }

  const {
    id,
    title,
    price,
    purpose,
    type,
    location,
    bedrooms,
    bathrooms,
    area,
    image,
    imageUrl,
    featured,
    description,
  } = property;

  // Supports both the new uploaded-image field
  // and older imageUrl data.
  const propertyImage = image || imageUrl;

  const formattedPrice =
    price !== undefined &&
    price !== null &&
    price !== ""
      ? Number(price).toLocaleString("en-IN")
      : "Price on Request";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-64 overflow-hidden bg-slate-100">

        {propertyImage ? (
          <img
            src={propertyImage}
            alt={title || "Property"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100">
            <div className="text-center">
              <div className="text-4xl">🏠</div>
              <p className="mt-2 text-sm text-slate-400">
                No Image Available
              </p>
            </div>
          </div>
        )}

        {/* Dark gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {/* =====================================================
            TOP BADGES
        ====================================================== */}

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">

          {featured && (
            <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-950 shadow">
              Featured
            </span>
          )}

          {purpose && (
            <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow">
              For {purpose}
            </span>
          )}

        </div>

        {/* =====================================================
            LIKE BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={
            liked
              ? "Remove from favourites"
              : "Add to favourites"
          }
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md transition hover:scale-105"
        >
          <Heart
            size={19}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-slate-700"
            }
          />
        </button>

      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5">

        {/* PRICE */}

        <div className="flex items-end gap-2">

          <h3 className="text-2xl font-bold text-slate-900">
            {price !== undefined &&
            price !== null &&
            price !== ""
              ? `₹${formattedPrice}`
              : "Price on Request"}
          </h3>

          {purpose === "Rent" && (
            <span className="mb-1 text-sm text-slate-400">
              / month
            </span>
          )}

        </div>

        {/* TITLE */}

        <Link
          to={`/properties/${id}`}
          className="mt-2 block"
        >
          <h2 className="line-clamp-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-amber-600">
            {title || "Untitled Property"}
          </h2>
        </Link>

        {/* LOCATION */}

        {location && (
          <div className="mt-2 flex items-start gap-2 text-sm text-slate-500">

            <MapPin
              size={16}
              className="mt-0.5 shrink-0 text-amber-500"
            />

            <span className="line-clamp-1">
              {location}
            </span>

          </div>
        )}

        {/* =====================================================
            PROPERTY DETAILS
        ====================================================== */}

        <div className="mt-5 grid grid-cols-3 border-t border-slate-100 pt-4">

          {/* BEDROOMS */}

          <div className="flex items-center gap-2 border-r border-slate-100">

            <BedDouble
              size={17}
              className="text-slate-400"
            />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                {bedrooms ?? "-"}
              </p>

              <p className="text-[11px] text-slate-400">
                Beds
              </p>
            </div>

          </div>

          {/* BATHROOMS */}

          <div className="flex items-center justify-center gap-2 border-r border-slate-100">

            <Bath
              size={17}
              className="text-slate-400"
            />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                {bathrooms ?? "-"}
              </p>

              <p className="text-[11px] text-slate-400">
                Baths
              </p>
            </div>

          </div>

          {/* AREA */}

          <div className="flex items-center justify-end gap-2">

            <Maximize
              size={17}
              className="text-slate-400"
            />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                {area ?? "-"}
              </p>

              <p className="text-[11px] text-slate-400">
                Sq.ft
              </p>
            </div>

          </div>

        </div>

        {/* =====================================================
            TYPE + VIEW BUTTON
        ====================================================== */}

        <div className="mt-5 flex items-center justify-between">

          {type ? (
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
              {type}
            </span>
          ) : (
            <span />
          )}

          <Link
            to={`/properties/${id}`}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            View Details
          </Link>

        </div>

        {/* OPTIONAL DESCRIPTION */}

        {description && (
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}

      </div>

    </article>
  );
};

export default PropertyCard;