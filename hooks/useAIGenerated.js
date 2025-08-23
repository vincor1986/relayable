"use client";

import useNotificationCtx from "@/store/useNotificationCtx";
import { useState, useEffect } from "react";

const useAIGenerated = () => {
  const [guideIds, setGuideIds] = useState([]);
  const { notifyUser } = useNotificationCtx();

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("ai-generated")) || [];
    setGuideIds(storedIds);
  }, []);

  const addAIGuide = (id) => {
    setGuideIds((prev) => [...prev, id]);
    localStorage.setItem("ai-generated", JSON.stringify([...guideIds, id]));
    notifyUser("success", "AI Guide added");
  };

  return { guideIds, addAIGuide };
};

export default useAIGenerated;
