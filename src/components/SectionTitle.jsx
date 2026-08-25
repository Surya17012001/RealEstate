function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`${
        align === "center"
          ? "mx-auto text-center"
          : ""
      } max-w-2xl`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;