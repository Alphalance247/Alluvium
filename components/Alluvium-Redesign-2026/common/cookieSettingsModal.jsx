"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../common/button";

const Toggle = ({ checked, disabled = false, onChange }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={onChange}
    className={`w-9 h-5 p-0.5 rounded-xl flex items-center transition-colors ${
      checked
        ? disabled
          ? "bg-[#F6D5B6] justify-end"
          : "bg-default-100 justify-end"
        : "bg-slate-200 justify-start"
    } ${disabled ? "cursor-not-allowed" : ""}`}
  >
    <span className="w-4 h-4 bg-white rounded-full shadow" />
  </button>
);

const CookieSettingsModal = ({ onClose, onSave }) => {
  const [preferences, setPreferences] = useState({
    functional: false,
    analytics: false,
    performance: false,
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const rows = [
    { key: "necessary", label: "Necessary", locked: true },
    { key: "functional", label: "Functional" },
    { key: "analytics", label: "Analytics" },
    { key: "performance", label: "Performance" },
  ];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[521px] bg-white rounded-lg shadow-xl flex flex-col items-start gap-4 overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="w-full flex flex-col items-start gap-4">
          <div className="w-full px-6 pt-4 border-b border-slate-200 pb-4 flex items-start gap-2">
            <div className="flex-1 flex flex-col items-start gap-2">
              <span className="text-[#1D2939] text-lg font-bold font-sans leading-7">
                Customize cookie settings
              </span>
              <p className="w-full text-[#344054] text-sm font-medium font-sans leading-5">
                We use cookies and similar technologies to make our website
                work, to understand how it is used, and, with your permission,
                for marketing. Choose how you want us to use cookies below. To
                read more, see our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-default-100 font-bold underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="w-full px-6 flex flex-col items-start gap-4">
            {rows.map((row) => (
              <div
                key={row.key}
                className="w-full pt-4 border-t border-slate-200 flex flex-col items-start gap-2"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-[#1D2939] text-sm font-bold font-sans leading-5">
                    {row.label}
                  </span>
                  {row.locked ? (
                    <div className="flex items-center gap-4">
                      <span className="text-green-700 text-xs font-bold font-sans leading-4">
                        Always Active
                      </span>
                      <Toggle checked disabled onChange={() => {}} />
                    </div>
                  ) : (
                    <Toggle
                      checked={preferences[row.key]}
                      onChange={() => togglePreference(row.key)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-6 pt-4 pb-6 bg-white flex flex-col items-center gap-3">
          <div className="w-full flex items-center gap-2">
            {/* <button className="flex-1 h-10 px-4 py-2.5 rounded-lg border border-slate-300 shadow-sm text-[#344054] text-sm font-bold font-sans">
              Reject all
            </button> */}
            <Button
              size="md"
              variant="secondary"
              type="button"
              className="flex-1 h-10 px-4 py-2.5 !rounded-md !hover:text-white"
              onClick={() =>
                onSave({
                  functional: false,
                  analytics: false,
                  performance: false,
                })
              }
            >
              Reject all
            </Button>
            <button
              type="button"
              onClick={() =>
                onSave({ functional: true, analytics: true, performance: true })
              }
              className="flex-1 h-10 px-4 py-2.5 rounded-lg bg-default-100 border border-default-100 shadow-sm text-white text-sm font-bold font-sans"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
