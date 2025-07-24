"use client";

import { createContext, useState, useMemo } from "react";

const DEFAULT_STATE = {
  vendor: null,
  title: "",
  author: "",
  description: "",
  variables: [],
  steps: [],
  errors: {},
  uiState: {
    query: "",
  },
  updateFormData: (key, value, index = false, type = "override") => {},
  addErrorMsg: (field, message) => {},
};

const CreatorCtx = createContext(DEFAULT_STATE);

export const CreatorCtxProvider = (props) => {
  const [formData, setFormData] = useState(DEFAULT_STATE);

  const updateFormData = (key, value, index = false, type = "overwrite") => {
    switch (type) {
      case "overwrite":
        setFormData((prev) => ({ ...prev, [key]: value }));
        break;
      case "add":
        setFormData((prev) => ({ ...prev, [key]: [...prev[key], value] }));
        break;
      case "remove":
        setFormData((prev) => ({
          ...prev,
          [key]: prev[key].filter((_, i) => i !== index),
        }));
        break;
      case "edit":
        setFormData((prev) => {
          const arr = [...prev[key]];
          arr.splice(index, 1, value);
          return { ...prev, [key]: arr };
        });
        break;
      default:
        console.warn("Unknown update type:", type);
        break;
    }
  };

  const addErrorMsg = (field, message) => {
    setFormData((prev) => ({
      ...prev,
      errors: { ...prev.errors, [field]: message },
    }));

    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        errors: { ...prev.errors, [field]: null },
      }));
    }, 8000);
  };

  const ctx = useMemo(
    () => ({
      ...formData,
      errors: {
        vendor: null,
        title: null,
        author: null,
        description: null,
        variables: null,
        steps: null,
      },
      updateFormData,
      addErrorMsg,
    }),
    [JSON.stringify(formData)]
  );

  return (
    <CreatorCtx.Provider value={ctx}>{props.children}</CreatorCtx.Provider>
  );
};

export default CreatorCtx;
