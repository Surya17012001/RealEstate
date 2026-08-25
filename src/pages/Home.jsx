import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import PropertyGrid from "../components/PropertyGrid";
import ProjectCard from "../components/ProjectCard";
import AgentCard from "../components/AgentCard";

import { useRealEstate } from "../context/RealEstateContext";

function Home() {
  const {
    properties,
    projects,
    agents,
    homeData,
  } = useRealEstate();

  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 6);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const featuredAgents = agents.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Properties */}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Properties"
            title={homeData.featuredTitle}
            description={homeData.featuredSubtitle}
          />

          <Link
            to="/properties"
            className="shrink-0 text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            View all properties →
          </Link>
        </div>

        <PropertyGrid
          properties={featuredProperties}
        />
      </section>

      {/* Projects */}

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Developments"
              title={homeData.projectsTitle}
              description={homeData.projectsSubtitle}
            />

            <Link
              to="/projects"
              className="shrink-0 text-sm font-bold text-blue-600"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Experts"
            title={homeData.agentsTitle}
            description={homeData.agentsSubtitle}
          />

          <Link
            to="/agents"
            className="shrink-0 text-sm font-bold text-blue-600"
          >
            Meet all agents →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
            />
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-7 py-14 text-center sm:px-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to find your next property?
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Browse verified properties and connect with trusted
              real estate professionals.
            </p>

            <Link
              to="/properties"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;