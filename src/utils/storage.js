// src/utils/storage.js

export const STORAGE_KEYS = {
  properties: "realestate_properties",
  projects: "realestate_projects",
  agents: "realestate_agents",
  home: "realestate_home",
  pages: "realestate_pages",
  settings: "realestate_settings",
  admin: "realestate_admin",
  adminAuth: "realestate_admin_auth",
};

export const storage = {
  get(key, fallback) {
    try {
      const item =
        localStorage.getItem(key);

      if (item === null) {
        return fallback;
      }

      return JSON.parse(item);
    } catch (error) {
      console.error(
        `Error reading ${key} from localStorage:`,
        error
      );

      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

      return true;
    } catch (error) {
      console.error(
        `Error saving ${key} to localStorage:`,
        error
      );

      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(
        `Error removing ${key}:`,
        error
      );
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(
        "Error clearing localStorage:",
        error
      );
    }
  },
};