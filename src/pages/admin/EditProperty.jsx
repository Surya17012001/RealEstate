// src/pages/admin/EditProperty.jsx

import { useEffect, useState } from "react";

import {
  ArrowLeft,
  Image as ImageIcon,
  Save,
  Upload,
  X,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import { useRealEstate } from "../../hooks/useRealEstate";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    getProperty,
    updateProperty,
  } = useRealEstate();

  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  /*
   * LOAD PROPERTY
   */
  useEffect(() => {
    const property = getProperty(id);

    if (!property) {
      setError("Property not found.");
      return;
    }

    setFormData({
      title: property.title || "",
      type: property.type || "Apartment",
      purpose: property.purpose || "Sale",
      price: property.price || "",
      location: property.location || "",
      bedrooms: property.bedrooms ?? 0,
      bathrooms: property.bathrooms ?? 0,
      area: property.area || "",
      image: property.image || "",
      description: property.description || "",
      featured: Boolean(property.featured),
    });
  }, [id, getProperty]);

  /*
   * INPUT CHANGE
   */
  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  /*
   * IMAGE UPLOAD
   */
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setError("Image size must be less than 3MB.");
      return;
    }

    setError("");

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((current) => ({
        ...current,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  /*
   * REMOVE IMAGE
   */
  const removeImage = () => {
    setFormData((current) => ({
      ...current,
      image: "",
    }));
  };

  /*
   * SUBMIT
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!formData.title.trim()) {
      setError("Please enter a property title.");
      return;
    }

    if (!formData.location.trim()) {
      setError("Please enter the property location.");
      return;
    }

    if (!formData.price) {
      setError("Please enter the property price.");
      return;
    }

    if (!formData.area) {
      setError("Please enter the property area.");
      return;
    }

    if (!formData.image) {
      setError("Please upload a property image.");
      return;
    }

    updateProperty(Number(id), {
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
    });

    navigate("/admin/properties");
  };

  /*
   * LOADING
   */
  if (!formData && !error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-amber-500" />

          <p className="mt-4 text-sm text-slate-500">
            Loading property...
          </p>

        </div>

      </div>
    );
  }

  /*
   * NOT FOUND
   */
  if (error && !formData) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
          <span className="text-2xl font-bold">
            !
          </span>
        </div>

        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          Property Not Found
        </h1>

        <p className="mt-2 text-slate-500">
          The property you are trying to edit does not exist.
        </p>

        <Link
          to="/admin/properties"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
        >
          <ArrowLeft size={17} />
          Back to Properties
        </Link>

      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">

      {/* HEADER */}
      <div className="mb-8">

        <Link
          to="/admin/properties"
          className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-amber-600"
        >
          <ArrowLeft size={16} />
          Back to Properties
        </Link>

        <h1 className="text-2xl font-bold text-slate-900">
          Edit Property
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Update the property information.
        </p>

      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">

          <span>{error}</span>

          <button
            type="button"
            onClick={() => setError("")}
          >
            <X size={18} />
          </button>

        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* MAIN */}
          <div className="space-y-6 lg:col-span-2">

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                Property Information
              </h2>

              <div className="mt-6 space-y-5">

                {/* TITLE */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Property Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />

                </div>

                {/* TYPE / PURPOSE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Property Type
                    </label>

                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
                    >
                      <option value="Apartment">
                        Apartment
                      </option>

                      <option value="Villa">
                        Villa
                      </option>

                      <option value="House">
                        House
                      </option>

                      <option value="Commercial">
                        Commercial
                      </option>

                      <option value="Land">
                        Land
                      </option>
                    </select>

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Purpose
                    </label>

                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
                    >
                      <option value="Sale">
                        Sale
                      </option>

                      <option value="Rent">
                        Rent
                      </option>
                    </select>

                  </div>

                </div>

                {/* PRICE / LOCATION */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Price
                    </label>

                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />

                  </div>

                </div>

                {/* DETAILS */}
                <div className="grid gap-5 sm:grid-cols-3">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Bedrooms
                    </label>

                    <input
                      type="number"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      min="0"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Bathrooms
                    </label>

                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      min="0"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Area (sq.ft)
                    </label>

                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      min="0"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />

                  </div>

                </div>

                {/* DESCRIPTION */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                  />

                </div>

              </div>

            </section>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* IMAGE */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                Property Image
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Upload or replace the property image.
              </p>

              <div className="mt-5">

                {/* PREVIEW */}
                <div className="relative mb-4 h-52 overflow-hidden rounded-xl bg-slate-100">

                  {formData.image ? (
                    <>
                      <img
                        src={formData.image}
                        alt={formData.title}
                        className="h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700"
                      >
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-slate-400">

                      <ImageIcon size={45} />

                      <p className="mt-3 text-sm">
                        No image selected
                      </p>

                    </div>
                  )}

                </div>

                {/* UPLOAD */}
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-center transition hover:border-amber-400 hover:bg-amber-50">

                  <Upload
                    size={28}
                    className="mb-2 text-slate-400"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    Click to upload new image
                  </span>

                  <span className="mt-1 text-xs text-slate-400">
                    PNG, JPG, JPEG or WEBP • Max 3MB
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                </label>

              </div>

            </section>

            {/* FEATURED */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <label className="flex cursor-pointer items-start gap-3">

                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4"
                />

                <div>

                  <p className="text-sm font-semibold text-slate-900">
                    Featured Property
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Show this property prominently.
                  </p>

                </div>

              </label>

            </section>

            {/* ACTIONS */}
            <div className="flex flex-col gap-3">

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400"
              >
                <Save size={18} />
                Update Property
              </button>

              <Link
                to="/admin/properties"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </Link>

            </div>

          </div>

        </div>

      </form>

    </div>
  );
};

export default EditProperty;