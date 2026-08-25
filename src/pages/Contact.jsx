import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { useState } from "react";

import { useRealEstate } from "../context/RealEstateContext";

function Contact() {
  const { pages } = useRealEstate();

  const contact = pages.contact;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    event.target.reset();
  };

  return (
    <div>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            {contact.title}
          </h1>

          <p className="mt-5 text-lg text-slate-400">
            {contact.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Let's talk
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Have a question about a property or project?
              Send us a message and our team will get back to
              you.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {contact.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Address
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            {submitted && (
              <div className="mb-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thank you! Your enquiry has been submitted.
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </label>

                <input
                  required
                  type="tel"
                  placeholder="Your phone"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  required
                  rows="6"
                  placeholder="Tell us what property you're looking for..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;