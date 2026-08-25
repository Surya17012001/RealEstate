import properties from "../data/properties";

const STORAGE_KEY = "realtyhub_properties";

export const getProperties = () => {
  const storedProperties = localStorage.getItem(STORAGE_KEY);

  if (storedProperties) {
    return JSON.parse(storedProperties);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));

  return properties;
};

export const saveProperties = (properties) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(properties)
  );
};

export const addProperty = (property) => {
  const currentProperties = getProperties();

  const newProperty = {
    ...property,
    id: Date.now(),
  };

  const updatedProperties = [
    newProperty,
    ...currentProperties,
  ];

  saveProperties(updatedProperties);

  return newProperty;
};

export const updateProperty = (id, updatedProperty) => {
  const currentProperties = getProperties();

  const updatedProperties = currentProperties.map(
    (property) =>
      property.id === Number(id)
        ? {
            ...property,
            ...updatedProperty,
            id: property.id,
          }
        : property
  );

  saveProperties(updatedProperties);

  return updatedProperties;
};

export const deleteProperty = (id) => {
  const currentProperties = getProperties();

  const updatedProperties = currentProperties.filter(
    (property) => property.id !== Number(id)
  );

  saveProperties(updatedProperties);

  return updatedProperties;
};

export const getPropertyById = (id) => {
  const currentProperties = getProperties();

  return currentProperties.find(
    (property) => property.id === Number(id)
  );
};