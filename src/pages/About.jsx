import {
  Award,
  Building2,
  CheckCircle2,
  Users,
} from "lucide-react";

import { useRealEstate } from "../context/RealEstateContext";

function About() {
  const { pages } = useRealEstate();

  const about = pages.about;

  return (
    <div>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            {about.title}
          </h1>

          <p className="mt-5 text-lg text-slate-400">
            {about.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Property search made simpler
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {about.content}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <Building2
                  className="text-blue-600"
                  size={24}
                />

                <p className="mt-4 text-2xl font-bold">
                  10K+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Properties
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <Users
                  className="text-blue-600"
                  size={24}
                />

                <p className="mt-4 text-2xl font-bold">
                  500+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Agents
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <Award
                  className="text-blue-600"
                  size={24}
                />

                <p className="mt-4 text-2xl font-bold">
                  10+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Years
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80"
              alt="Real estate"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-blue-600 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-bold">
            Why choose us?
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Verified Properties",
              "Trusted Agents",
              "Transparent Information",
              "Personalized Support",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0"
                />

                <span className="font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;