// src/pages/admin/AddProperty.jsx

import { useState } from "react";
import {
  ArrowLeft,
  Image as ImageIcon,
  Save,
  Upload,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useRealEstate } from "../../hooks/useRealEstate";

const AddProperty = () => {
  const navigate = useNavigate();
  const { addProperty } = useRealEstate();

  const [formData, setFormData] = useState({
    title: "",
    type: "Apartment",
    purpose: "Sale",
    price: "",
    location: "",
    bedrooms: 2,
    bathrooms: 2,
    area: "",
    image: "",
    description: "",
    featured: false,
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /*
   * IMAGE UPLOAD
   */
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Allow only images
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    // Limit image size to 3MB
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

    addProperty({
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
    });

    navigate("/admin/properties");
  };

  return (
    <div className="mx-auto max-w-5xl">

      {/* HEADER */}
      <div className="mb-8">

        <Link
          to="/admin/properties"
          className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-amber-600"
        >
          <ArrowLeft size={16} />
          Back to Properties
        </Link>

        <h1 className="text-2xl font-bold text-slate-900">
          Add Property
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Add a new property to your real estate portal.
        </p>

      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">

          <span>{error}</span>

          <button
            type="button"
            onClick={() => setError("")}
            className="ml-4"
          >
            <X size={18} />
          </button>

        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* MAIN INFORMATION */}
          <div className="space-y-6 lg:col-span-2">

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                Property Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Enter the basic information about the property.
              </p>

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
                    placeholder="Luxury 3 BHK Apartment"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                      placeholder="8500000"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />

                    <p className="mt-1 text-xs text-slate-400">
                      Enter amount in Indian Rupees.
                    </p>
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
                      placeholder="Porur, Chennai"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                </div>

                {/* BEDROOMS / BATHROOMS / AREA */}
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
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                      placeholder="1850"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                    placeholder="Describe the property..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

              </div>

            </section>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* IMAGE UPLOAD */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                Property Image
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Upload an image from your computer.
              </p>

              <div className="mt-5">

                {/* PREVIEW */}
                <div className="relative mb-4 h-52 overflow-hidden rounded-xl bg-slate-100">

                  {formData.image ? (
                    <>
                      <img
                        src={formData.image}
                        alt="Property preview"
                        className="h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:bg-red-700"
                        title="Remove image"
                      >
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-slate-400">

                      <ImageIcon
                        size={45}
                        strokeWidth={1.5}
                      />

                      <p className="mt-3 text-sm font-medium">
                        No image selected
                      </p>

                    </div>
                  )}

                </div>

                {/* FILE INPUT */}
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-center transition hover:border-amber-400 hover:bg-amber-50">

                  <Upload
                    size={28}
                    className="mb-2 text-slate-400"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    Click to upload image
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
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                />

                <div>

                  <p className="text-sm font-semibold text-slate-900">
                    Featured Property
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Display this property prominently on the
                    website.
                  </p>

                </div>

              </label>

            </section>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3">

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                <Save size={18} />
                Save Property
              </button>

              <Link
                to="/admin/properties"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
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

export default AddProperty;