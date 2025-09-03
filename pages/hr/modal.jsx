import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (typeof window === "undefined") return null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div style={overlay} onClick={onClose}>
      <div style={dialog} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtn} onClick={onClose} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};
const dialog = {
  background: "#fff",
  borderRadius: 8,
  width: "min(90vw, 800px)",
  maxHeight: "90vh",
  overflow: "auto",
  padding: 20,
  position: "relative",
  boxShadow: "0 10px 30px rgba(0,0,0,.2)",
};
const closeBtn = {
  position: "absolute",
  top: 8,
  right: 12,
  border: "none",
  background: "transparent",
  fontSize: 24,
  cursor: "pointer",
  lineHeight: 1,
};
