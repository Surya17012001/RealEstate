import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  initialAdmin,
  initialAgents,
  initialHomeData,
  initialPages,
  initialProjects,
  initialProperties,
  initialSettings,
} from "../data/initialData";

import {
  STORAGE_KEYS,
  storage,
} from "../utils/storage";

const RealEstateContext = createContext(null);

export function RealEstateProvider({ children }) {
  // =====================================================
  // DATA
  // =====================================================

  const [properties, setProperties] = useState(() =>
    storage.get(
      STORAGE_KEYS.properties,
      initialProperties
    )
  );

  const [projects, setProjects] = useState(() =>
    storage.get(
      STORAGE_KEYS.projects,
      initialProjects
    )
  );

  const [agents, setAgents] = useState(() =>
    storage.get(
      STORAGE_KEYS.agents,
      initialAgents
    )
  );

  const [homeData, setHomeData] = useState(() =>
    storage.get(
      STORAGE_KEYS.home,
      initialHomeData
    )
  );

  const [pages, setPages] = useState(() =>
    storage.get(
      STORAGE_KEYS.pages,
      initialPages
    )
  );

  const [settings, setSettings] = useState(() =>
    storage.get(
      STORAGE_KEYS.settings,
      initialSettings
    )
  );

  const [admin, setAdmin] = useState(() =>
    storage.get(
      STORAGE_KEYS.admin,
      initialAdmin
    )
  );

  const [
    isAdminAuthenticated,
    setIsAdminAuthenticated,
  ] = useState(() =>
    storage.get(
      STORAGE_KEYS.adminAuth,
      false
    )
  );

  // =====================================================
  // AUTO SAVE
  // =====================================================

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.properties,
      properties
    );
  }, [properties]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.projects,
      projects
    );
  }, [projects]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.agents,
      agents
    );
  }, [agents]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.home,
      homeData
    );
  }, [homeData]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.pages,
      pages
    );
  }, [pages]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.settings,
      settings
    );
  }, [settings]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.admin,
      admin
    );
  }, [admin]);

  useEffect(() => {
    storage.set(
      STORAGE_KEYS.adminAuth,
      isAdminAuthenticated
    );
  }, [isAdminAuthenticated]);

  // =====================================================
  // PROPERTY CRUD
  // =====================================================

  const addProperty = (property) => {
    const newProperty = {
      ...property,
      id: Date.now(),
      createdAt: new Date()
        .toISOString()
        .split("T")[0],
    };

    setProperties((current) => [
      newProperty,
      ...current,
    ]);

    return newProperty;
  };

  const updateProperty = (
    id,
    updatedProperty
  ) => {
    const numericId = Number(id);

    setProperties((current) =>
      current.map((property) =>
        Number(property.id) === numericId
          ? {
              ...property,
              ...updatedProperty,
              id: property.id,
            }
          : property
      )
    );
  };

  const deleteProperty = (id) => {
    const numericId = Number(id);

    setProperties((current) =>
      current.filter(
        (property) =>
          Number(property.id) !== numericId
      )
    );
  };

  const getProperty = (id) => {
    const numericId = Number(id);

    return properties.find(
      (property) =>
        Number(property.id) === numericId
    );
  };

  // =====================================================
  // PROJECT CRUD
  // =====================================================

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
    };

    setProjects((current) => [
      newProject,
      ...current,
    ]);

    return newProject;
  };

  const updateProject = (
    id,
    updatedProject
  ) => {
    const numericId = Number(id);

    setProjects((current) =>
      current.map((project) =>
        Number(project.id) === numericId
          ? {
              ...project,
              ...updatedProject,
              id: project.id,
            }
          : project
      )
    );
  };

  const deleteProject = (id) => {
    const numericId = Number(id);

    setProjects((current) =>
      current.filter(
        (project) =>
          Number(project.id) !== numericId
      )
    );
  };

  const getProject = (id) => {
    const numericId = Number(id);

    return projects.find(
      (project) =>
        Number(project.id) === numericId
    );
  };

  // =====================================================
  // AGENT CRUD
  // =====================================================

  const addAgent = (agent) => {
    const newAgent = {
      ...agent,
      id: Date.now(),
    };

    setAgents((current) => [
      newAgent,
      ...current,
    ]);

    return newAgent;
  };

  const updateAgent = (
    id,
    updatedAgent
  ) => {
    const numericId = Number(id);

    setAgents((current) =>
      current.map((agent) =>
        Number(agent.id) === numericId
          ? {
              ...agent,
              ...updatedAgent,
              id: agent.id,
            }
          : agent
      )
    );
  };

  const deleteAgent = (id) => {
    const numericId = Number(id);

    setAgents((current) =>
      current.filter(
        (agent) =>
          Number(agent.id) !== numericId
      )
    );
  };

  const getAgent = (id) => {
    const numericId = Number(id);

    return agents.find(
      (agent) =>
        Number(agent.id) === numericId
    );
  };

  // =====================================================
  // HOME
  // =====================================================

  const updateHomeData = (data) => {
    setHomeData((current) => ({
      ...current,
      ...data,
    }));
  };

  // =====================================================
  // PAGES
  // =====================================================

  const updatePage = (
    pageName,
    data
  ) => {
    setPages((current) => ({
      ...current,

      [pageName]: {
        ...current[pageName],
        ...data,
      },
    }));
  };

  // =====================================================
  // SETTINGS
  // =====================================================

  const updateSettings = (data) => {
    setSettings((current) => ({
      ...current,
      ...data,
    }));
  };

  // =====================================================
  // ADMIN LOGIN
  // =====================================================

  const loginAdmin = (
    username,
    password
  ) => {
    if (
      username === admin.username &&
      password === admin.password
    ) {
      setIsAdminAuthenticated(true);

      return {
        success: true,
      };
    }

    return {
      success: false,
      message:
        "Invalid username or password",
    };
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
  };

  const updateAdminCredentials = (
    username,
    password
  ) => {
    setAdmin({
      username,
      password,
    });
  };

  // =====================================================
  // RESET
  // =====================================================

  const resetAllData = () => {
    setProperties([
      ...initialProperties,
    ]);

    setProjects([
      ...initialProjects,
    ]);

    setAgents([
      ...initialAgents,
    ]);

    setHomeData({
      ...initialHomeData,
    });

    setPages({
      ...initialPages,
    });

    setSettings({
      ...initialSettings,
    });

    setAdmin({
      ...initialAdmin,
    });
  };

  // =====================================================
  // STATISTICS
  // =====================================================

  const statistics = useMemo(() => {
    return {
      totalProperties:
        properties.length,

      saleProperties:
        properties.filter(
          (property) =>
            property.purpose === "Sale"
        ).length,

      rentalProperties:
        properties.filter(
          (property) =>
            property.purpose === "Rent"
        ).length,

      featuredProperties:
        properties.filter(
          (property) =>
            property.featured
        ).length,

      totalProjects:
        projects.length,

      totalAgents:
        agents.length,

      availableProjects:
        projects.reduce(
          (total, project) =>
            total +
            Number(
              project.availableUnits || 0
            ),
          0
        ),
    };
  }, [
    properties,
    projects,
    agents,
  ]);

  // =====================================================
  // CONTEXT VALUE
  // =====================================================

  const value = {
    properties,
    projects,
    agents,

    homeData,
    pages,
    settings,

    admin,
    isAdminAuthenticated,

    statistics,

    // Properties
    addProperty,
    updateProperty,
    deleteProperty,
    getProperty,

    // Projects
    addProject,
    updateProject,
    deleteProject,
    getProject,

    // Agents
    addAgent,
    updateAgent,
    deleteAgent,
    getAgent,

    // Website
    updateHomeData,
    updatePage,
    updateSettings,

    // Admin
    loginAdmin,
    logoutAdmin,
    updateAdminCredentials,

    // Reset
    resetAllData,
  };

  return (
    <RealEstateContext.Provider
      value={value}
    >
      {children}
    </RealEstateContext.Provider>
  );
}

export function useRealEstate() {
  const context =
    useContext(RealEstateContext);

  if (!context) {
    throw new Error(
      "useRealEstate must be used inside RealEstateProvider"
    );
  }

  return context;
}