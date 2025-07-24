"use client";

import { useContext } from "react";
import CreatorCtx from "./CreatorContext";

const useCreatorCtx = () => {
  const ctx = useContext(CreatorCtx);
  if (!ctx) {
    throw new Error("useCreatorCtx must be used within a CreatorCtxProvider");
  }
  return ctx;
};

export default useCreatorCtx;
