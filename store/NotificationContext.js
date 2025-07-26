"use client";

import { createContext, useState } from "react";

const DEFAULT_STATE = {
  type: null,
  message: "",
  notifyUser: (type, message) => {},
};

const NotificationCtx = createContext(DEFAULT_STATE);

export const NotificationCtxProvider = (props) => {
  const [notification, setNotification] = useState({
    type: null,
    message: "",
  });

  const notifyUser = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification({ type: null, message: "" }), 6000);
  };

  const ctx = {
    ...notification,
    notifyUser,
  };

  return (
    <NotificationCtx.Provider value={ctx}>
      {props.children}
    </NotificationCtx.Provider>
  );
};

export default NotificationCtx;
