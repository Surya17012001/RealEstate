import PropertyCard from "./PropertyCard";

function PropertyGrid({
  properties,
  emptyMessage = "No properties found.",
}) {
  if (!properties.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <h3 className="text-lg font-semibold text-slate-800">
          No properties found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}

export default PropertyGrid;