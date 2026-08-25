import {
  ArrowRight,
  Building2,
  Home,
  KeyRound,
  LandPlot,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description:
      "Find apartments, villas, houses and plots that match your budget, location and lifestyle.",
  },
  {
    icon: Building2,
    title: "Property Selling",
    description:
      "List your property and reach potential buyers with a professional property presentation.",
  },
  {
    icon: KeyRound,
    title: "Property Rental",
    description:
      "Discover rental properties for homes, offices and commercial spaces across different locations.",
  },
  {
    icon: LandPlot,
    title: "Land & Plots",
    description:
      "Explore residential and commercial land opportunities for your next investment.",
  },
  {
    icon: Search,
    title: "Property Search",
    description:
      "Search properties using location, property type, price and other useful filters.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Properties",
    description:
      "We focus on providing clear property information to make your real estate journey easier.",
  },
];

const Services = () => {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Our Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need for your{" "}
              <span className="text-amber-500">
                property journey.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              From finding your dream home to selling your property,
              RealtyHub provides simple and reliable real estate
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Real estate services designed around you
            </h2>

            <p className="mt-4 text-slate-600">
              Whether you are buying, selling, renting or investing,
              our platform helps you make better property decisions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-600">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-center text-white sm:px-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Get Started
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Ready to find your next property?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Explore our property listings and discover a place
              that fits your needs and budget.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Browse Properties
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Services;