import {
  ArrowUpRight,
  Building2,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

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

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
          {project.status}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={15} />

          {project.location}
        </div>

        <Link to={`/projects/${project.id}`}>
          <h3 className="mt-3 text-xl font-bold text-slate-900 transition hover:text-blue-600">
            {project.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-500">
          By {project.developer}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
          <div>
            <p className="text-xs text-slate-400">
              Starting From
            </p>

            <p className="mt-1 font-bold text-slate-900">
              {formatPrice(project.priceFrom)}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Available
            </p>

            <p className="mt-1 font-bold text-slate-900">
              {project.availableUnits} Units
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Building2 size={16} />

            {project.type}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-blue-600 hover:text-white"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;