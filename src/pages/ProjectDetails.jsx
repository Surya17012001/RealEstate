import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { useRealEstate } from "../context/RealEstateContext";

function formatPrice(price) {
  const value = Number(price);

  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }

  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} Lakh`;
  }

  return `₹${value.toLocaleString("en-IN")}`;
}

function ProjectDetails() {
  const { id } = useParams();

  const { getProject } = useRealEstate();

  const project = getProject(id);

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>

        <Link
          to="/projects"
          className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={project.name}
            className="h-[400px] w-full object-cover sm:h-[520px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
          <div>
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
              {project.status}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-slate-900">
              {project.name}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-slate-500">
              <MapPin size={17} />

              {project.location}
            </div>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <Building2
                  size={22}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm text-slate-400">
                  Developer
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {project.developer}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <CalendarDays
                  size={22}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm text-slate-400">
                  Completion
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  {project.completionDate}
                </p>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-slate-500">
                Starting from
              </p>

              <p className="mt-2 text-3xl font-bold text-blue-600">
                {formatPrice(project.priceFrom)}
              </p>

              <div className="mt-6 space-y-4 border-y border-slate-100 py-5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Total Units
                  </span>

                  <span className="font-bold">
                    {project.units}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Available
                  </span>

                  <span className="font-bold">
                    {project.availableUnits}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Property Type
                  </span>

                  <span className="font-bold">
                    {project.type}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
              >
                Enquire Now
              </button>

              <div className="mt-5 space-y-3 text-sm text-slate-500">
                <div className="flex gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-green-500"
                  />

                  Verified Project
                </div>

                <div className="flex gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-green-500"
                  />

                  Trusted Developer
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;