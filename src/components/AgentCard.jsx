import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

function AgentCard({ agent }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <img
          src={agent.image}
          alt={agent.name}
          className="h-16 w-16 rounded-2xl object-cover"
        />

        <div className="min-w-0">
          <h3 className="font-bold text-slate-900">
            {agent.name}
          </h3>

          <p className="mt-1 text-sm text-blue-600">
            {agent.role}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {agent.experience} years experience
          </p>
        </div>
      </div>

      <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-500">
        {agent.description}
      </p>

      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Phone size={15} />

          {agent.phone}
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Mail size={15} />

          <span className="truncate">
            {agent.email}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white"
      >
        Contact Agent

        <ArrowUpRight size={16} />
      </button>
    </div>
  );
}

export default AgentCard;