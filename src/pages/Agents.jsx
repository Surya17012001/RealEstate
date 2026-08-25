import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import AgentCard from "../components/AgentCard";
import { useRealEstate } from "../context/RealEstateContext";

function Agents() {
  const { agents } = useRealEstate();

  const [search, setSearch] = useState("");

  const filteredAgents = useMemo(() => {
    if (!search.trim()) {
      return agents;
    }

    const query = search.toLowerCase();

    return agents.filter((agent) =>
      [
        agent.name,
        agent.role,
        agent.location,
      ]
        .filter(Boolean)
        .some((value) =>
          value.toLowerCase().includes(query)
        )
    );
  }, [agents, search]);

  return (
    <div>
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            Our Experts
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Meet our property agents
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Connect with experienced real estate professionals.
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
              placeholder="Search agent or location"
              className="w-full rounded-xl bg-white py-4 pl-11 pr-4 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Agents;