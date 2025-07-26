"use client";

import { NotificationCtxProvider } from "@/store/NotificationContext";
import Notification from "./Notifcation";

const NotificationWrapper = ({ children }) => (
  <NotificationCtxProvider>
    <Notification />
    {children}
  </NotificationCtxProvider>
);

export default NotificationWrapper;
