// Drop-in replacement for the deprecated "react-toast-notifications" package,
// backed by react-hot-toast. Exposes the same ToastProvider / useToasts API so
// existing call sites only need their import path changed.
import React, { createContext, useContext } from "react";
import hotToast, { Toaster } from "react-hot-toast";

const ToastContext = createContext(false);

function fireToast(content, { appearance, autoDismiss = true, autoDismissTimeout } = {}) {
  const options = {
    duration: autoDismiss ? autoDismissTimeout || 5000 : Infinity,
  };
  switch (appearance) {
    case "success":
      return hotToast.success(content, options);
    case "error":
      return hotToast.error(content, options);
    case "warning":
      return hotToast(content, { ...options, icon: "⚠️" });
    case "info":
      return hotToast(content, { ...options, icon: "ℹ️" });
    default:
      return hotToast(content, options);
  }
}

export function useToasts() {
  return {
    addToast: (content, options, callback) => {
      const id = fireToast(content, options);
      if (typeof callback === "function") callback(id);
      return id;
    },
    removeToast: (id, callback) => {
      hotToast.dismiss(id);
      if (typeof callback === "function") callback(id);
    },
    removeAllToasts: () => hotToast.dismiss(),
    updateToast: () => {},
    toastStack: [],
  };
}

// Some pages nest their own ToastProvider inside the one from _app; only the
// outermost provider mounts a Toaster so toasts never render twice.
export function ToastProvider({ children, placement = "top-right", autoDismissTimeout }) {
  const hasParentProvider = useContext(ToastContext);
  if (hasParentProvider) return children;
  return (
    <ToastContext.Provider value={true}>
      {children}
      <Toaster
        position={placement}
        toastOptions={autoDismissTimeout ? { duration: autoDismissTimeout } : undefined}
      />
    </ToastContext.Provider>
  );
}
