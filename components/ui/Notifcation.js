"use client";

import useNotificationCtx from "@/store/useNotificationCtx";

const Notification = () => {
  const { type, message } = useNotificationCtx();

  if (!type || !message) return null;

  const color =
    type === "warning"
      ? "bg-red-800 text-white"
      : type === "info"
      ? "bg-blue text-white"
      : "bg-dark-green text-white";

  return (
    <div
      className={
        "fixed flex items-center justify-center top-34 left-1/2 w-11/12 -translate-x-1/2 max-w-[800px] mx-auto p-4 z-80 rounded-md " +
        color
      }
      data-testid={`notification-${type}`}
    >
      <p className="text-md font-bold text-white">{message}</p>
    </div>
  );
};

export default Notification;
