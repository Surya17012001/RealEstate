import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-32 text-center">
      <p className="text-7xl font-black text-blue-600">
        404
      </p>

      <h1 className="mt-5 text-3xl font-bold text-slate-900">
        Page not found
      </h1>

      <p className="mt-3 text-slate-500">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;