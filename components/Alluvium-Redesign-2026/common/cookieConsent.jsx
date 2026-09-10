"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CookieSettingsModal from "./cookieSettingsModal";
import { savePreferences } from "./cookiePreferences";
import Button from "../common/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    savePreferences({ functional: true, analytics: true, performance: true });
    setVisible(false);
  };

  const handleReject = () => {
    savePreferences({
      functional: false,
      analytics: false,
      performance: false,
    });
    setVisible(false);
  };

  const handleSaveFromModal = (preferences) => {
    savePreferences(preferences);
    setManageOpen(false);
    setVisible(false);
  };

  if (!visible && !manageOpen) return null;

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t border-slate-200 shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.05)]">
          <div className="w-full px-6 py-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <p className="max-w-3xl text-[#1D2939] text-xs font-medium font-sans leading-5">
              We use cookies and similar technologies to make our website work,
              to understand how it is used, and, with your permission, for
              marketing. Choose how you want us to use cookies below. To read
              more, see our{" "}
              <Link
                href="/cookie-policy"
                className="text-default-100 font-bold underline"
              >
                Cookie Policy
              </Link>
              .
            </p>

            <div className=" flex items-center flex-col lg:flex-row gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setManageOpen(true)}
                className="h-10 px-4 py-2.5 rounded-lg text-[#344054] text-sm font-bold font-sans"
              >
                Manage setting
              </button>

              {/* <button
                type="button"
                className="h-10 px-4 py-2.5 rounded-lg border border-slate-300 shadow-sm text-[#344054] text-sm font-bold font-sans"
              >
                Reject all
              </button> */}
              <Button
                size="md"
                variant="secondary"
                type="button"
                className="h-10 !rounded-md"
                onClick={handleReject}
              >
                Reject all
              </Button>
              <button
                type="button"
                onClick={handleAccept}
                className="h-10 px-4 py-2.5 rounded-lg bg-default-100 border border-default-100 shadow-sm text-white text-sm font-bold font-sans"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {manageOpen && (
        <CookieSettingsModal
          onClose={() => setManageOpen(false)}
          onSave={handleSaveFromModal}
        />
      )}
    </>
  );
};

export default CookieConsent;
