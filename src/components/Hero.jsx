import {
  Building2,
  Home,
  MapPin,
  Search,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRealEstate } from "../context/RealEstateContext";

function Hero() {
  const navigate = useNavigate();

  const { homeData } = useRealEstate();

  const [purpose, setPurpose] = useState("Sale");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (purpose) {
      params.set("purpose", purpose);
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (type) {
      params.set("type", type);
    }

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={homeData.heroImage}
          alt="Luxury property"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            <Building2 size={16} />

            Trusted Real Estate Platform
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            {homeData.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {homeData.heroSubtitle}
          </p>

          {/* Search */}

          <form
            onSubmit={handleSearch}
            className="mt-10 overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
          >
            <div className="grid gap-3 lg:grid-cols-[140px_1fr_180px_auto]">
              <select
                value={purpose}
                onChange={(event) =>
                  setPurpose(event.target.value)
                }
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-800 outline-none focus:border-blue-500"
              >
                <option value="Sale">Buy</option>
                <option value="Rent">Rent</option>
              </select>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                  placeholder="Enter city or location"
                  className="h-full w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <Home
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  value={type}
                  onChange={(event) =>
                    setType(event.target.value)
                  }
                  className="h-full w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-blue-500"
                >
                  <option value="">
                    Property Type
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
                </select>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Search size={18} />

                Search
              </button>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/70">
            <span>Popular:</span>

            {[
              "Chennai",
              "Bangalore",
              "Hyderabad",
              "Mumbai",
            ].map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => {
                  navigate(
                    `/properties?purpose=${purpose}&location=${encodeURIComponent(
                      city
                    )}`
                  );
                }}
                className="transition hover:text-white"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;