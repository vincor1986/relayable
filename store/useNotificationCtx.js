"use client";

import { useContext } from "react";
import NotificationCtx from "./NotificationContext";

const useNotificationCtx = () => {
  const ctx = useContext(NotificationCtx);
  if (!ctx) {
    throw new Error(
      "useNotificationCtx must be used within a NotificationCtxProvider"
    );
  }
  return ctx;
};

export default useNotificationCtx;
