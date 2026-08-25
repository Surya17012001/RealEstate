import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import { useRealEstate } from "../context/RealEstateContext";

function Projects() {
  const { projects } = useRealEstate();

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    if (!search.trim()) {
      return projects;
    }

    const query = search.toLowerCase();

    return projects.filter((project) =>
      [
        project.name,
        project.location,
        project.city,
        project.developer,
        project.type,
      ]
        .filter(Boolean)
        .some((value) =>
          value.toLowerCase().includes(query)
        )
    );
  }, [projects, search]);

  return (
    <div>
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            New Developments
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Explore premium projects
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Discover upcoming, under-construction and ready-to-move
            projects.
          </p>

          <div className="relative mt-8 max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search project, developer or location"
              className="w-full rounded-xl bg-white py-4 pl-11 pr-4 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-sm text-slate-500">
            {filteredProjects.length} projects
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Featured developments
          </h2>
        </div>

        {filteredProjects.length ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-16 text-center">
            No projects found.
          </div>
        )}
      </section>
    </div>
  );
}

export default Projects;